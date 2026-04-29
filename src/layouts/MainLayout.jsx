import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import InboxIcon from '@mui/icons-material/Inbox'
import NavMenu from '@/components/ui/NavMenu'
import { useAuth } from '@/hooks/useAuth'

const DRAWER_WIDTH = 240

/** Define your nav tree here – add/remove items as needed */
const NAV_ITEMS = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon fontSize="small" />,
  },
  {
    label: 'Test Code',
    path: '/test-code',
    icon: <InboxIcon fontSize="small" />,
  },
  {
    label: 'Test Code2',
    path: '/test-code2',
    icon: <InboxIcon fontSize="small" />,
  },
  {
    label: 'Profile',
    path: '/fawwaz-dzaki-rahman',
    icon: <InboxIcon fontSize="small" />,
  },
  // {
  //   label: 'Settings',
  //   icon: <SettingsIcon fontSize="small" />,
  //   children: [
  //     { label: 'Profile', path: '/settings/profile', icon: <PersonOutlineIcon fontSize="small" /> },
  //     { label: 'Security', path: '/settings/security', icon: <LockOutlinedIcon fontSize="small" /> },
  //   ],
  // },
]

export default function MainLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)

  function toggleDrawer() {
    setDrawerOpen((v) => !v)
  }

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <Toolbar sx={{ px: 2, minHeight: 64 }}>
        <Typography variant="h6" fontWeight={700} color="primary" noWrap>
          Tittle Tugas Akhir
        </Typography>
      </Toolbar>
      <Divider />
      <Box sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', py: 1 }}>
        <NavMenu items={NAV_ITEMS} onNavigate={() => setDrawerOpen(false)} />
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* ── AppBar ── */}
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          zIndex: (t) => t.zIndex.drawer + 1,
          transition: (t) =>
            t.transitions.create(['width', 'margin'], {
              easing: t.transitions.easing.sharp,
              duration: t.transitions.duration.leavingScreen,
            }),
          ...(drawerOpen && {
            ml: `${DRAWER_WIDTH}px`,
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            transition: (t) =>
              t.transitions.create(['width', 'margin'], {
                easing: t.transitions.easing.sharp,
                duration: t.transitions.duration.enteringScreen,
              }),
          }),
        }}
      >
        <Toolbar>
          <IconButton edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flex: 1 }} />
          <Tooltip title={user?.name ?? 'Account'}>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} size="small">
              <Avatar sx={{ width: 34, height: 34, bgcolor: 'primary.main', fontSize: 15 }}>
                {user?.name?.[0]?.toUpperCase() ?? 'U'}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* ── User menu ── */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        <MenuItem disabled>
          <PersonIcon fontSize="small" sx={{ mr: 1 }} />
          {user?.email}
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            setAnchorEl(null)
            logout()
            navigate('/login', { replace: true })
          }}
        >
          <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>

      {/* ── Drawer ── */}
      <Drawer
        variant="persistent"
        open={drawerOpen}
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* ── Main content ── */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          bgcolor: 'background.default',
          minHeight: '100vh',
          transition: (t) =>
            t.transitions.create('margin', {
              easing: t.transitions.easing.sharp,
              duration: t.transitions.duration.leavingScreen,
            }),
          ml: drawerOpen ? 0 : `-${DRAWER_WIDTH}px`,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}

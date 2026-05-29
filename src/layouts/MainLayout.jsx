import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material'

export default function MainLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  // AUTH
  const { logout } = useAuth()

  const menus = [
    {
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      label: 'Profile',
      path: '/profile',
    },
    {
      label: 'Modul',
      path: '/module',
    },
    {
      label: 'Komunitas',
      path: '/komunitas',
    },
  ]

  // HANDLE LOGOUT
  const handleLogout = () => {
    logout()

    navigate('/login', {
      replace: true,
    })
  }

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <CssBaseline />

      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          bgcolor: '#003b2f',
          px: 2,
          py: 1,
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/dashboard')}
          >
            Amartha Empower
          </Typography>

          {/* Menu */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
            }}
          >
            {menus.map((menu) => {
              const isActive = location.pathname === menu.path

              return (
                <Button
                  key={menu.path}
                  variant="contained"
                  onClick={() => navigate(menu.path)}
                  sx={{
                    bgcolor: isActive ? '#4caf50' : '#2f8f2f',
                    borderRadius: 1.5,
                    px: 4,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 700,
                    boxShadow: 'none',

                    '&:hover': {
                      bgcolor: '#4caf50',
                      boxShadow: 'none',
                    },
                  }}
                >
                  {menu.label}
                </Button>
              )
            })}

            {/* LOGOUT BUTTON */}
            <Button
              variant="contained"
              color="error"
              onClick={handleLogout}
              sx={{
                borderRadius: 1.5,
                px: 4,
                py: 1,
                textTransform: 'none',
                fontWeight: 700,
                boxShadow: 'none',

                '&:hover': {
                  boxShadow: 'none',
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Box
        component="main"
        sx={{
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
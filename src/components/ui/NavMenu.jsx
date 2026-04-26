import { Fragment, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

/**
 * NavMenu – recursive nav list supporting parent/child items.
 *
 * items shape:
 * [
 *   { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
 *   {
 *     label: 'Settings',
 *     icon: <SettingsIcon />,
 *     children: [
 *       { label: 'Profile', path: '/settings/profile', icon: <PersonIcon /> },
 *       { label: 'Security', path: '/settings/security', icon: <LockIcon /> },
 *     ],
 *   },
 * ]
 */
export default function NavMenu({ items = [], onNavigate, depth = 0 }) {
  const location = useLocation()
  const navigate = useNavigate()

  // Track which parent groups are expanded (by label)
  const [expanded, setExpanded] = useState(() => {
    const open = {}
    items.forEach((item) => {
      if (item.children?.some((c) => c.path === location.pathname)) {
        open[item.label] = true
      }
    })
    return open
  })

  function toggle(label) {
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  function handleNavigate(path) {
    navigate(path)
    onNavigate?.()
  }

  return (
    <List disablePadding sx={{ px: depth === 0 ? 1 : 0 }}>
      {items.map((item) => {
        const hasChildren = item.children?.length > 0
        const isOpen = expanded[item.label] ?? false
        const isSelected = item.path && location.pathname === item.path
        const childSelected = item.children?.some((c) => c.path === location.pathname)

        return (
          <Fragment key={item.label}>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                selected={isSelected || (!hasChildren && childSelected)}
                onClick={() => hasChildren ? toggle(item.label) : handleNavigate(item.path)}
                sx={{
                  borderRadius: 2,
                  pl: 1.5 + depth * 2,
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    '& .MuiListItemIcon-root': { color: 'primary.contrastText' },
                    '&:hover': { bgcolor: 'primary.dark' },
                  },
                  ...(childSelected && !isSelected && {
                    color: 'primary.main',
                    '& .MuiListItemIcon-root': { color: 'primary.main' },
                  }),
                }}
              >
                {item.icon && (
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                )}
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: depth > 0 ? 13 : 14, fontWeight: depth > 0 ? 400 : 500 }}
                />
                {hasChildren && (isOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />)}
              </ListItemButton>
            </ListItem>

            {hasChildren && (
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <NavMenu items={item.children} onNavigate={onNavigate} depth={depth + 1} />
              </Collapse>
            )}
          </Fragment>
        )
      })}
    </List>
  )
}

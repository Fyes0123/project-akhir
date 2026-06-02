import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { useAuth } from '@/hooks/useAuth'

export default function LoginPage() {
  const { user, login, isAuthenticated } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname ?? '/dashboard'

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // redirect jika sudah login
  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === 'superadmin') {
        navigate('/superadmin')
      }
      else if (user.role === 'admin') {
        navigate('/dashboardadmin')
      }
      else {
        navigate('/dashboardnasabah')
      }
    }
  }, [isAuthenticated, user, navigate])

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

    setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!form.email || !form.password) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      )
      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Login gagal'
        )
      }

      login(data.user)

    } catch (err) {
      setError(err.message ?? 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#e8f5e9',
        p: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 430,
          borderRadius: 4,
          boxShadow: 5,
        }}
      >
        <CardContent
          sx={{
            p: { xs: 3, sm: 4 },
          }}
        >
          {/* HEADER */}
          <Stack alignItems="center" spacing={1} mb={4}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: '#0b3d2e',
              }}
            >
              Amartha Empower
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#4b5563',
              }}
            >
              Sign in to your account
            </Typography>
          </Stack>

          <Divider sx={{ mb: 3 }} />

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* FORM */}
          <Stack
            component="form"
            onSubmit={handleSubmit}
            spacing={2}
          >
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              autoFocus
            />

            <TextField
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword((v) => !v)
                      }
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* LOGIN BUTTON */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                mt: 1,
                py: 1.3,
                fontWeight: 700,
                bgcolor: '#15803d',

                '&:hover': {
                  bgcolor: '#166534',
                },
              }}
            >
              {loading ? (
                <CircularProgress
                  size={22}
                  color="inherit"
                />
              ) : (
                'Login'
              )}
            </Button>

            {/* REGISTER BUTTON */}
            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate('/register')}
              sx={{
                py: 1.3,
                fontWeight: 700,
                borderColor: '#15803d',
                color: '#15803d',

                '&:hover': {
                  borderColor: '#166534',
                  bgcolor: '#f0fdf4',
                },
              }}
            >
              Register
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}
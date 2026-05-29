import { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Grid,
} from '@mui/material'

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    business: '',
    description: '',
  })

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newUser = {
      ...form,
      progress: 75,
      photo: 'https://i.pravatar.cc/150',
    }

    localStorage.setItem(
      'nasabah_data',
      JSON.stringify(newUser)
    )

    alert('Register berhasil!')
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 700,
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          mb={4}
          textAlign="center"
        >
          Register Nasabah
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nama Lengkap"
                name="fullName"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nomor HP"
                name="phone"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nama Usaha"
                name="business"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Deskripsi Usaha"
                name="description"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{
                  py: 1.5,
                  fontWeight: 700,
                }}
              >
                Register
              </Button>
            </Grid>

          </Grid>
        </form>
      </Card>
    </Box>
  )
}
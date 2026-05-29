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
    fullname: '',
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

  async function handleSubmit(e) {
  e.preventDefault()

  try {
    const response = await fetch(
      'http://127.0.0.1:8000/api/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      }
    )

    const data = await response.json()

    console.log(data)

    alert('Register berhasil!')

    localStorage.setItem(
      'nasabah_data',
      JSON.stringify(data.data)
    )

  } catch (error) {
    console.error(error)
    alert('Register gagal!')
  }
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
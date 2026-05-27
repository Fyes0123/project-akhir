import { useNavigate } from 'react-router-dom'

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Container,
} from '@mui/material'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <Box sx={{ bgcolor: '#f3f4f6' }}>
      {/* NAVBAR */}
      <AppBar
        position="static"
        sx={{
          bgcolor: '#003b1f',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography fontWeight={700}>
            Amartha Empower
          </Typography>

          <Button
            variant="contained"
            color="success"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* HERO */}
      <Container sx={{ py: 4 }}>
        <Card
          sx={{
            bgcolor: '#79c267',
            borderRadius: 2,
            p: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={3}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
                alt="hero"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                }}
              />
            </Grid>

            <Grid item xs={12} md={9}>
              <Typography
                variant="h5"
                fontWeight={700}
                mb={2}
              >
                Berkembang dengan dana yang lancar
              </Typography>

              <Typography>
                Amartha Empower membantu anda dalam
                mengembangkan UMKM untuk meningkatkan
                ekonomi masyarakat dan membantu dalam
                masa perintisan anda.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* SERVICES */}
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            bgcolor: '#84cc16',
            textAlign: 'center',
            py: 1,
            mb: 3,
            fontWeight: 700,
          }}
        >
          Services
        </Box>

        <Grid container spacing={3}>
          {/* PINJAM */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                p: 2,
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07"
                alt="pinjam"
                sx={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />

              <Typography
                mt={2}
                fontWeight={700}
              >
                Pinjam
              </Typography>
            </Card>
          </Grid>

          {/* EDUKASI */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                p: 2,
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="edukasi"
                sx={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />

              <Typography
                mt={2}
                fontWeight={700}
              >
                Edukasi
              </Typography>
            </Card>
          </Grid>

          {/* MANAGEMENT */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: 'center',
                p: 2,
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="management"
                sx={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />

              <Typography
                mt={2}
                fontWeight={700}
              >
                Management
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* TESTIMONI */}
      <Box
        sx={{
          bgcolor: '#2f8f2f',
          py: 5,
          mt: 4,
        }}
      >
        <Typography
          textAlign="center"
          variant="h5"
          color="white"
          fontWeight={700}
          mb={4}
        >
          Testimoni
        </Typography>

        <Container>
          <Grid container spacing={3}>
            {[
              'Sangat Trusted',
              'Mudah',
              'Murah',
              'Cokii',
            ].map((item, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card
                  sx={{
                    p: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography fontSize={40}>
                    👤
                  </Typography>

                  <Typography>{item}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* COMMUNITY */}
      <Container sx={{ py: 6 }}>
        <Card
          sx={{
            bgcolor: '#b7e4c7',
            p: 3,
            borderRadius: 3,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="community"
                sx={{
                  width: '100%',
                  borderRadius: 3,
                }}
              />
            </Grid>

            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  bgcolor: '#84cc16',
                  textAlign: 'center',
                  py: 1,
                  borderRadius: 10,
                  mb: 3,
                }}
              >
                <Typography fontWeight={700}>
                  Community
                </Typography>
              </Box>

              <Typography mb={3}>
                Amartha Empower membantu anda dalam
                mengembangkan UMKM untuk meningkatkan
                ekonomi masyarakat dan membantu dalam
                masa perintisan anda.
              </Typography>

              <Typography mb={3}>
                Dengan komunitas yang sehat dan suportif
                akan membantu anda dalam menjalankan UMKM
                yang anda impikan.
              </Typography>

              <Button
                variant="contained"
                color="success"
                sx={{
                  borderRadius: 10,
                  px: 5,
                }}
              >
                Join
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* FOOTER */}
      <Box
        sx={{
          bgcolor: '#003b1f',
          color: 'white',
          p: 5,
          mt: 4,
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                fontWeight={700}
                mb={2}
              >
                Amartha Empower
              </Typography>

              <Typography variant="body2">
                Jl. Eaa, Kecamatan Uwaw, Kota Duar,
                Provinsi Adadeh
              </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography fontWeight={700}>
                Contact
              </Typography>

              <Typography variant="body2">
                Mail To Us
              </Typography>

              <Typography variant="body2">
                Chat To Us
              </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography fontWeight={700}>
                Contact
              </Typography>

              <Typography variant="body2">
                Mail To Us
              </Typography>

              <Typography variant="body2">
                Chat To Us
              </Typography>
            </Grid>
          </Grid>

          <Box mt={5} textAlign="center">
            <Typography variant="caption">
              © 2025 Amartha Empower Company.
              All Right Reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
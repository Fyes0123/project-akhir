import { useState } from 'react'

import PeopleIcon from '@mui/icons-material/People'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AssignmentIcon from '@mui/icons-material/Assignment'

import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import NasabahCard from '@/pages/Card/NasabahCard'

import {
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Avatar,
  Stack,
} from '@mui/material'

export default function DashboardNasabah() {
  const { user } = useAuth()
  const navigate = useNavigate()

  // simulasi status pinjaman
  const [hasLoanApplication, setHasLoanApplication] = useState(false)

  const nasabahData = JSON.parse(
  localStorage.getItem('nasabah_data')
)

  function handleCommunityAccess() {
    if (!hasLoanApplication) {
      alert('Anda harus mengajukan pinjaman terlebih dahulu')
      return
    }

    navigate('/komunitas')
  }

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>

      {/* Informasi Nasabah */}
      <NasabahCard user={nasabahData} />

      {/* QUICK ACCESS */}
      <Box sx={{ p: 5 }}>
        <Grid container spacing={4}>

          {/* Community */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 4,
                borderRadius: 4,
                height: '100%',
                boxShadow: 3,
              }}
            >
              <Stack spacing={3} alignItems="center">

                <PeopleIcon
                  sx={{
                    fontSize: 60,
                    color: '#15803d',
                  }}
                />

                <Typography variant="h5" fontWeight={700}>
                  Community
                </Typography>

                <Typography textAlign="center">
                  Bergabung dengan komunitas UMKM dan belajar bersama.
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCommunityAccess}
                >
                  Masuk Komunitas
                </Button>

              </Stack>
            </Card>
          </Grid>

          {/* Modul */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 4,
                borderRadius: 4,
                height: '100%',
                boxShadow: 3,
              }}
            >
              <Stack spacing={3} alignItems="center">

                <AssignmentIcon
                  sx={{
                    fontSize: 60,
                    color: '#15803d',
                  }}
                />

                <Typography variant="h5" fontWeight={700}>
                  Modul Edukasi
                </Typography>

                <Typography textAlign="center">
                  Pelajari pengelolaan keuangan dan bisnis UMKM.
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  onClick={() => navigate('/modul')}
                >
                  Lihat Modul
                </Button>

              </Stack>
            </Card>
          </Grid>

          {/* Loan */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 4,
                borderRadius: 4,
                height: '100%',
                boxShadow: 3,
              }}
            >
              <Stack spacing={3} alignItems="center">

                <TrendingUpIcon
                  sx={{
                    fontSize: 60,
                    color: '#15803d',
                  }}
                />

                <Typography variant="h5" fontWeight={700}>
                  Pengajuan Pinjaman
                </Typography>

                <Typography textAlign="center">
                  Ajukan pinjaman cepat untuk pengembangan usaha Anda.
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    navigate('/applyloan')
                  }}
                >
                  Mulai Pengajuan
                </Button>

              </Stack>
            </Card>
          </Grid>

        </Grid>
      </Box>

      {/* COMMUNITY & EDUCATION */}
      <Box
        sx={{
          bgcolor: '#b7e4c7',
          p: 5,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          mb={5}
        >
          Community and Education
        </Typography>

        <Grid container spacing={4}>

          {/* Community Group */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                bgcolor: '#84cc16',
                borderRadius: 4,
                height: '100%',
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                mb={4}
              >
                Community Group
              </Typography>

              <Stack spacing={2}>
                <Button variant="outlined">
                  Komunitas Pajak
                </Button>

                <Button variant="outlined">
                  Komunitas Edukasi
                </Button>

                <Button variant="outlined">
                  Komunitas Aman Tentram
                </Button>

                <Button variant="outlined">
                  Komunitas Bisnis Kuliner
                </Button>
              </Stack>
            </Card>
          </Grid>

          {/* Education */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                bgcolor: '#84cc16',
                borderRadius: 4,
                height: '100%',
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                mb={4}
              >
                Education
              </Typography>

              <Box
                component="img"
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800"
                alt="education"
                sx={{
                  width: '100%',
                  height: 320,
                  objectFit: 'cover',
                  borderRadius: 3,
                }}
              />
            </Card>
          </Grid>

        </Grid>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          bgcolor: '#0b3d2e',
          color: 'white',
          p: 5,
        }}
      >
        <Grid container spacing={4}>

          {/* Company */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700}>
              Amartha Empower
            </Typography>

            <Typography variant="body1" mt={2}>
              Jl. Eaa, Kecamatan Uwaw, Kota Duar,
              Provinsi Adadeh
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700}>
              Contact
            </Typography>

            <Typography variant="body1" mt={2}>
              Mail To Us
            </Typography>

            <Typography variant="body1">
              Chat To Us
            </Typography>
          </Grid>

        </Grid>

        <Box mt={5} textAlign="center">
          <Typography variant="caption">
            © 2025 Amartha Empower Company. All Right Reserved
          </Typography>
        </Box>
      </Box>

    </Box>
  )
}
import PeopleIcon from '@mui/icons-material/People'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AssignmentIcon from '@mui/icons-material/Assignment'

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
} from '@mui/material'

export default function DashboardAdmin() {
  const navigate = useNavigate()

  return (
    <Box>
      {/* NAVBAR */}
      <AppBar position="static" sx={{ bgcolor: '#0b3d2e' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography fontWeight={700}>
            Amartha Empower
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => navigate('/admin')}
              color="success"
              variant="contained"
            >
              Dashboard
            </Button>

            <Button
              onClick={() => navigate('/admin/nasabah')}
              color="success"
              variant="contained"
            >
              User Management
            </Button>

            <Button
              onClick={() => navigate('/admin/pinjaman')}
              color="success"
              variant="contained"
            >
              Pengajuan
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* HERO SECTION */}
      <Box
        sx={{
          bgcolor: '#b7e4c7',
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          mb={2}
        >
          Dashboard Admin
        </Typography>

        <Typography variant="body1">
          Kelola data nasabah, pengajuan pinjaman,
          serta monitoring perkembangan UMKM
          melalui dashboard admin Amartha Empower.
        </Typography>
      </Box>

      {/* STATISTIC CARD */}
      <Box sx={{ p: 4 }}>
        <Grid container spacing={3}>
          {/* TOTAL USER */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                bgcolor: '#84cc16',
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6">
                      Total Nasabah
                    </Typography>

                    <Typography
                      variant="h4"
                      fontWeight={700}
                    >
                      120
                    </Typography>
                  </Box>

                  <PeopleIcon sx={{ fontSize: 50 }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* TOTAL PENGAJUAN */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                bgcolor: '#84cc16',
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6">
                      Pengajuan Aktif
                    </Typography>

                    <Typography
                      variant="h4"
                      fontWeight={700}
                    >
                      25
                    </Typography>
                  </Box>

                  <AssignmentIcon sx={{ fontSize: 50 }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* TOTAL PINJAMAN */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                bgcolor: '#84cc16',
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6">
                      Progress UMKM
                    </Typography>

                    <Typography
                      variant="h4"
                      fontWeight={700}
                    >
                      75%
                    </Typography>
                  </Box>

                  <TrendingUpIcon sx={{ fontSize: 50 }} />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* MENU SECTION */}
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h5"
          fontWeight={700}
          mb={3}
        >
          Management Menu
        </Typography>

        <Grid container spacing={3}>
          {/* USER MANAGEMENT */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: '#65a30d',
                color: 'white',
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  mb={2}
                >
                  User Management
                </Typography>

                <Typography mb={3}>
                  Kelola seluruh data nasabah dan
                  informasi pengguna.
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  onClick={() =>
                    navigate('/listnasabah')
                  }
                >
                  Open
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* PENGAJUAN */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: '#65a30d',
                color: 'white',
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  mb={2}
                >
                  Pengajuan Pinjaman
                </Typography>

                <Typography mb={3}>
                  Periksa dan validasi pengajuan
                  pinjaman dari UMKM.
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  onClick={() =>
                    navigate('/loanapply')
                  }
                >
                  Open
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          bgcolor: '#0b3d2e',
          color: 'white',
          p: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              Amartha Empower
            </Typography>

            <Typography variant="body2">
              Jl. Eaa, Kecamatan Uwaw, Kota Duar,
              Provinsi Adadeh
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>Contact</Typography>

            <Typography variant="body2">
              Mail To Us
            </Typography>

            <Typography variant="body2">
              Chat To Us
            </Typography>
          </Grid>
        </Grid>

        <Box mt={3} textAlign="center">
          <Typography variant="caption">
            © 2025 Amartha Empower Company.
            All Right Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
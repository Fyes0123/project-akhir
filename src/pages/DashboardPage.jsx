
import PeopleIcon from '@mui/icons-material/People'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

{/* For Frondend */}
import {
  AppBar,
  Toolbar,
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

export default function DashboardPage() {
  const { user } = useAuth()
  const navigate = useNavigate()

    return (
    <Box>
      {/* NAVBAR */}
      <AppBar position="static" sx={{ bgcolor: '#0b3d2e' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography fontWeight={700}>Amartha Empower</Typography>
           <Stack direction="row" spacing={2}>
          {/* Add Navigate here */}
          <Button onClick={() => navigate('/DasboardPage')} color="success" variant="contained">
          Dashboard
          </Button>
          <Button onClick={() => navigate('/Profile')} color="success" variant="contained">
          Profile
          </Button>
          <Button variant="contained" color="success">Modul</Button>
          <Button variant="contained" color="success">Komunitas</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* WELCOME SECTION */}
      <Box sx={{ bgcolor: '#b7e4c7', p: 4 }}>
        <Typography variant="h6" mb={2}>
          Welcome, Sarah UMKM
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              src="https://i.pravatar.cc/100"
              sx={{ width: 80, height: 80 }}
            />
          </Grid>

          <Grid item xs>
            <Typography variant="body2">
              Sarah adalah pelaku UMKM yang menjalankan usaha makanan rumahan
              untuk membantu perekonomian keluarganya. Ia ingin mengembangkan
              usahanya, tetapi sering mengalami kesulitan dalam mengakses
              pembiayaan serta memperoleh informasi tentang pengelolaan keuangan.
            </Typography>
          </Grid>
        </Grid>

        {/* PROGRESS */}
        <Box mt={3}>
          <Typography variant="body2">75%</Typography>
          <LinearProgress
            variant="determinate"
            value={75}
            sx={{
              height: 10,
              borderRadius: 5,
              bgcolor: '#d9f99d',
              '& .MuiLinearProgress-bar': {
                bgcolor: '#65a30d',
              },
            }}
          />
        </Box>
      </Box>

      {/* CTA */}
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Card sx={{ maxWidth: 400, mx: 'auto', bgcolor: '#a3e635' }}>
          <CardContent>
            <Typography variant="h6" fontWeight={600}>
              Ajukan Pinjaman Cepat
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: '#4d7c0f',
                '&:hover': { bgcolor: '#3f6212' },
              }}
            >
              Mulai Pengajuan
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* COMMUNITY */}
      <Box sx={{ bgcolor: '#b7e4c7', p: 4 }}>
        <Typography variant="h6" textAlign="center" mb={3}>
          Community and Education
        </Typography>

        <Grid container spacing={3}>
          {/* COMMUNITY CARD */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2, bgcolor: '#84cc16' }}>
              <Typography fontWeight={600} mb={2}>
                Community Group
              </Typography>

              <Stack spacing={1}>
                <Button variant="outlined">Komunitas Pajak</Button>
                <Button variant="outlined">Komunitas Edukasi</Button>
                <Button variant="outlined">Komunitas Aman Tentram</Button>
                <Button variant="outlined">Komunitas Bisnis Kuliner</Button>
              </Stack>
            </Card>
          </Grid>

          {/* EDUCATION CARD */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2, bgcolor: '#84cc16' }}>
              <Typography fontWeight={600} mb={2}>
                Education
              </Typography>

              <Box
                component="img"
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="education"
                sx={{ width: '100%', borderRadius: 2 }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: '#0b3d2e', color: 'white', p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>Amartha Empower</Typography>
            <Typography variant="body2">
              Jl. Eaa, Kecamatan Uwaw, Kota Duar, Provinsi Adadeh
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>Contact</Typography>
            <Typography variant="body2">Mail To Us</Typography>
            <Typography variant="body2">Chat To Us</Typography>
          </Grid>
        </Grid>

        <Box mt={3} textAlign="center">
          <Typography variant="caption">
            © 2025 Amartha Empower Company. All Right Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
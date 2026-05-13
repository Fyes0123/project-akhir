import MessageIcon from '@mui/icons-material/Message'
import BusinessIcon from '@mui/icons-material/Business'
import GroupsIcon from '@mui/icons-material/Groups'
import { useAuth } from '@/hooks/useAuth'
import { useState, useEffect } from "react";
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
  Avatar,
  Stack,
  IconButton,
} from '@mui/material'




export default function ProfilePage() {
  const { user } = useAuth();
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

      {/* HEADER PROFILE */}
      <Box sx={{ bgcolor: '#2e7d32', p: 4, color: 'white' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              src="https://i.pravatar.cc/150"
              sx={{ width: 90, height: 90 }}
            />
          </Grid>

          <Grid item xs>
            <Typography variant="h6" fontWeight={600}>
              Sarah UMKM
            </Typography>

            <Typography variant="body2" mt={1}>
              Sarah adalah pelaku UMKM yang menjalankan usaha makanan rumahan
              untuk membantu perekonomian keluarganya. Ia ingin mengembangkan
              usahanya namun mengalami kesulitan akses pembiayaan.
            </Typography>
          </Grid>

          <Grid item>
            <IconButton sx={{ bgcolor: '#a3e635' }}>
              <MessageIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      {/* CONTENT */}
      <Box sx={{ p: 4, bgcolor: '#f1f5f9' }}>
        <Grid container spacing={3}>
          {/* BUSINESSES */}
          <Grid item xs={12}>
            <Card sx={{ bgcolor: '#84cc16' }}>
              <CardContent>
                <Typography fontWeight={700} mb={2}>
                  Businesses
                </Typography>

                <Stack spacing={1}>
                  {[1,2,3,4,5].map((item) => (
                    <Stack key={item} direction="row" spacing={2} alignItems="center">
                      <BusinessIcon />
                      <Box sx={{ bgcolor: 'white', px: 2, py: 1, borderRadius: 1, width: '100%' }}>
                        UMKM Baju
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* COMMUNITIES */}
          <Grid item xs={12}>
            <Card sx={{ bgcolor: '#84cc16' }}>
              <CardContent>
                <Typography fontWeight={700} mb={2}>
                  Communities
                </Typography>

                <Stack spacing={1}>
                  {[1,2,3,4,5].map((item) => (
                    <Stack key={item} direction="row" spacing={2} alignItems="center">
                      <GroupsIcon />
                      <Box sx={{ bgcolor: 'white', px: 2, py: 1, borderRadius: 1, width: '100%' }}>
                        Komunitas UMKM
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: '#0b3d2e', color: 'white', p: 4 }}>
        <Typography fontWeight={600}>Amartha Empower</Typography>
        <Typography variant="body2">
          Jl. Eaa, Kecamatan Uwaw, Kota Duar, Provinsi Adadeh
        </Typography>

        <Box mt={2}>
          <Typography variant="caption">
            © 2025 Amartha Empower Company
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
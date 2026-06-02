import MessageIcon from '@mui/icons-material/Message'
import BusinessIcon from '@mui/icons-material/Business'
import GroupsIcon from '@mui/icons-material/Groups'
import { useAuth } from '@/hooks/useAuth'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import NasabahCard from '@/pages/Card/NasabahCard'


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

<NasabahCard user={nasabahData} />

      <Box
  sx={{
    px: { xs: 2, md: 6 },
    py: 5,
    bgcolor: '#f5f5f5',
  }}
>
  <Grid container spacing={4}>
    {/* Businesses */}
    <Grid item xs={12}>
      <Card
        sx={{
          borderRadius: 5,
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            bgcolor: '#15803d',
            color: 'white',
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
          >
            My Businesses
          </Typography>

          <Typography
            variant="body2"
            sx={{ opacity: 0.9 }}
          >
            Businesses registered in your account
          </Typography>
        </Box>

        <CardContent sx={{ p: 0 }}>
          {[
            'UMKM Kuliner Nusantara',
            'UMKM Fashion Lokal',
            'UMKM Kerajinan Tangan',
            'UMKM Kopi Nusantara',
          ].map((item, index, array) => (
            <Box
              key={item}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 3,
                transition: '0.2s',
                cursor: 'pointer',

                '&:hover': {
                  bgcolor: '#f8fafc',
                },

                borderBottom:
                  index !== array.length - 1
                    ? '1px solid #e5e7eb'
                    : 'none',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: '#dcfce7',
                    color: '#15803d',
                  }}
                >
                  <StorefrontIcon />
                </Avatar>

                <Box>
                  <Typography fontWeight={600}>
                    {item}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Registered Business
                  </Typography>
                </Box>
              </Box>

              <ArrowForwardIosIcon
                sx={{
                  fontSize: 16,
                  color: '#94a3b8',
                }}
              />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid>

    {/* Communities */}
    <Grid item xs={12}>
      <Card
        sx={{
          borderRadius: 5,
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            bgcolor: '#15803d',
            color: 'white',
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
          >
            My Communities
          </Typography>

          <Typography
            variant="body2"
            sx={{ opacity: 0.9 }}
          >
            Communities that you have joined
          </Typography>
        </Box>

        <CardContent sx={{ p: 0 }}>
          {[
            'Komunitas UMKM',
            'Komunitas Edukasi',
            'Komunitas Pajak',
            'Komunitas Digital Marketing',
          ].map((item, index, array) => (
            <Box
              key={item}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 3,
                transition: '0.2s',
                cursor: 'pointer',

                '&:hover': {
                  bgcolor: '#f8fafc',
                },

                borderBottom:
                  index !== array.length - 1
                    ? '1px solid #e5e7eb'
                    : 'none',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: '#dcfce7',
                    color: '#15803d',
                  }}
                >
                  <GroupsIcon />
                </Avatar>

                <Box>
                  <Typography fontWeight={600}>
                    {item}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Community Member
                  </Typography>
                </Box>
              </Box>

              <ArrowForwardIosIcon
                sx={{
                  fontSize: 16,
                  color: '#94a3b8',
                }}
              />
            </Box>
          ))}
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
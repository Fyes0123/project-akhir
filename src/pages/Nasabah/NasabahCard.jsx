import {
  Box,
  Typography,
  Grid,
  Avatar,
  LinearProgress,
} from '@mui/material'

export default function NasabahCard({ user }) {
  return (
    <Box
      sx={{
        bgcolor: '#b7e4c7',
        p: 5,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        mb={4}
      >
        Welcome, {user?.fullName || 'Nasabah'}
      </Typography>

      <Grid container spacing={4} alignItems="center">

        {/* Avatar */}
        <Grid item>
          <Avatar
            src={
              user?.photo ||
              'https://i.pravatar.cc/150'
            }
            sx={{
              width: 100,
              height: 100,
            }}
          />
        </Grid>

        {/* Informasi */}
        <Grid item xs>
          <Typography
            variant="body1"
            sx={{
              fontSize: 17,
              lineHeight: 1.8,
            }}
          >
            {user?.description ||
              'Belum ada deskripsi pengguna'}
          </Typography>

          <Typography mt={2}>
            <strong>Email:</strong> {user?.email}
          </Typography>

          <Typography>
            <strong>Phone:</strong> {user?.phone}
          </Typography>

          <Typography>
            <strong>Business:</strong> {user?.business}
          </Typography>
        </Grid>
      </Grid>

      {/* Progress */}
      <Box mt={5}>
        <Typography variant="body1" mb={1}>
          Progress Pembelajaran — {user?.progress || 0}%
        </Typography>

        <LinearProgress
          variant="determinate"
          value={user?.progress || 0}
          sx={{
            height: 12,
            borderRadius: 10,
            bgcolor: '#d9f99d',

            '& .MuiLinearProgress-bar': {
              bgcolor: '#65a30d',
            },
          }}
        />
      </Box>
    </Box>
  )
}
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { useAuth } from '@/hooks/useAuth'

const STAT_CARDS = [
  { label: 'Total Users', value: '1,284', icon: <PeopleIcon />, color: '#1565c0' },
  { label: 'Growth', value: '+12.5%', icon: <TrendingUpIcon />, color: '#2e7d32' },
  { label: 'Tasks', value: '38', icon: <AssignmentIcon />, color: '#f9a825' },
]

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <Box>
      <Stack mb={4} spacing={0.5}>
        <Typography variant="h5">Welcome back, {user?.name} 👋</Typography>
        <Typography variant="body2" color="text.secondary">
          Here's what's happening today.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {STAT_CARDS.map(({ label, value, icon, color }) => (
          <Grid item xs={12} sm={6} md={4} key={label}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: `${color}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color,
                    }}
                  >
                    {icon}
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {label}
                    </Typography>
                    <Typography variant="h5" fontWeight={700}>
                      {value}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

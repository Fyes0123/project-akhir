import {
  Avatar,
  Badge,
  Box,
  Card,
  Chip,
  Divider,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'

import NotificationsIcon from '@mui/icons-material/Notifications'
import CampaignIcon from '@mui/icons-material/Campaign'
import PaymentsIcon from '@mui/icons-material/Payments'
import VerifiedIcon from '@mui/icons-material/Verified'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const inboxData = [
  {
    id: 1,
    category: 'Loan Status',
    title: 'Loan Application Approved',
    message:
      'Congratulations! Your loan application has been approved.',
    time: '10 min ago',
    unread: true,
    color: 'success',
    icon: <VerifiedIcon />,
  },
  {
    id: 2,
    category: 'Payment Reminder',
    title: 'Installment Due Tomorrow',
    message:
      'Your next installment payment is due tomorrow.',
    time: '1 hour ago',
    unread: true,
    color: 'warning',
    icon: <PaymentsIcon />,
  },
  {
    id: 3,
    category: 'Community',
    title: 'New UMKM Webinar Available',
    message:
      'Join our free business growth webinar this weekend.',
    time: 'Yesterday',
    unread: false,
    color: 'info',
    icon: <CampaignIcon />,
  },
  {
    id: 4,
    category: 'Admin',
    title: 'Document Verification Complete',
    message:
      'Your uploaded documents have been successfully verified.',
    time: '2 days ago',
    unread: false,
    color: 'primary',
    icon: <SupportAgentIcon />,
  },
]

export default function InboxPage() {
  const unreadCount = inboxData.filter(
    (item) => item.unread
  ).length

  return (
    <Box
      sx={{
        bgcolor: '#f8fafc',
        minHeight: '100vh',
        p: 4,
      }}
    >
      {/* Header */}
      <Card
        sx={{
          p: 3,
          borderRadius: 4,
          mb: 3,
          boxShadow: 2,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Badge
            badgeContent={unreadCount}
            color="error"
          >
            <NotificationsIcon
              sx={{
                fontSize: 35,
                color: '#15803d',
              }}
            />
          </Badge>

          <Box>
            <Typography
              variant="h4"
              fontWeight={700}
            >
              Inbox
            </Typography>

            <Typography
              color="text.secondary"
            >
              Stay updated with your loan,
              payments, and community activities.
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* Inbox List */}
      <Card
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: 2,
        }}
      >
        <List disablePadding>
          {inboxData.map((item, index) => (
            <Box key={item.id}>
              <ListItemButton
                sx={{
                  py: 2.5,
                  px: 3,

                  '&:hover': {
                    bgcolor: '#f1f5f9',
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: `${item.color}.main`,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        fontWeight={
                          item.unread
                            ? 700
                            : 500
                        }
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        {item.time}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        {item.message}
                      </Typography>

                      <Chip
                        size="small"
                        label={item.category}
                        color={item.color}
                        sx={{ mt: 1 }}
                      />
                    </>
                  }
                />

                {item.unread && (
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      bgcolor: '#ef4444',
                      borderRadius: '50%',
                      ml: 2,
                    }}
                  />
                )}
              </ListItemButton>

              {index !== inboxData.length - 1 && (
                <Divider />
              )}
            </Box>
          ))}
        </List>
      </Card>
    </Box>
  )
}
import { useState } from 'react'
import {
  Box,
  Typography,
  Card,
  TextField,
  Button,
  Avatar,
} from '@mui/material'

import { useAuth } from '@/hooks/useAuth'

export default function Community() {
  const { user } = useAuth()

  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Sarah UMKM',
      time: '15.00',
      text: 'Terimakasih materinya, akhirnya saya tahu bagaimana menggunakan uang pinjaman dengan baik dan benar untuk keperluan penyetaraan UMKM saya. HIDUP UMKM!!!!',
      mine: false,
    },
    {
      id: 2,
      name: 'Joni UMKM',
      time: '15.00',
      text: 'Terimakasih materinya, akhirnya saya tahu bagaimana menggunakan uang pinjaman dengan baik dan benar untuk keperluan penyetaraan UMKM saya. HIDUP UMKM!!!!',
      mine: true,
    },
    {
      id: 3,
      name: 'Lara UMKM',
      time: '15.00',
      text: 'Terimakasih materinya, akhirnya saya tahu bagaimana menggunakan uang pinjaman dengan baik dan benar untuk keperluan penyetaraan UMKM saya. HIDUP UMKM!!!!',
      mine: false,
    },
    {
      id: 4,
      name: 'Sinta UMKM',
      time: '15.00',
      text: 'Terimakasih materinya, akhirnya saya tahu bagaimana menggunakan uang pinjaman dengan baik dan benar untuk keperluan penyetaraan UMKM saya. HIDUP UMKM!!!!',
      mine: true,
    },
  ])

  const handleSend = () => {
    if (!message.trim()) return

    const newMessage = {
      id: Date.now(),
      name: user?.name || 'Anda',
      time: new Date().toLocaleTimeString(
        'id-ID',
        {
          hour: '2-digit',
          minute: '2-digit',
        }
      ),
      text: message,
      mine: true,
    }

    setMessages((prev) => [...prev, newMessage])
    setMessage('')
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#d8f3dc',
        py: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          mx: 'auto',
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={4}
          color="#14532d"
        >
          Community
        </Typography>

        <Card
          sx={{
            p: 3,
            bgcolor: '#b7e4c7',
            borderRadius: 4,
          }}
        >
          {/* Materi */}
          <Card
            sx={{
              p: 2,
              mb: 4,
              bgcolor: '#84cc16',
              display: 'flex',
              gap: 2,
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=300"
              alt="loan"
              sx={{
                width: 120,
                height: 100,
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />

            <Box>
              <Typography
                fontWeight={700}
                mb={1}
              >
                Material : Loan Basic
              </Typography>

              <Typography variant="body2">
                Materi untuk tata cara peminjaman,
                mengatur uang pinjaman yang pas,
                mencegah uang pinjaman tidak
                digunakan sebaik mungkin, serta
                tips dan trik memanfaatkan dana
                pinjaman dengan sebaik mungkin.
              </Typography>
            </Box>
          </Card>

          {/* Chat */}
          <Box
            sx={{
              minHeight: 500,
              mb: 3,
            }}
          >
            {messages.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  display: 'flex',
                  justifyContent: msg.mine
                    ? 'flex-end'
                    : 'flex-start',
                  mb: 2,
                }}
              >
                <Card
                  sx={{
                    p: 2,
                    maxWidth: '70%',
                    bgcolor: '#84cc16',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent:
                        'space-between',
                      mb: 1,
                    }}
                  >
                    <Typography
                      fontWeight={700}
                      fontSize={14}
                    >
                      {msg.name}
                    </Typography>

                    <Typography
                      fontSize={12}
                    >
                      {msg.time}
                    </Typography>
                  </Box>

                  <Typography variant="body2">
                    {msg.text}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>

          {/* Input */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Tulis pesan..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend()
                }
              }}
            />

            <Button
              variant="contained"
              onClick={handleSend}
              sx={{
                bgcolor: '#84cc16',
                color: 'black',
                px: 4,

                '&:hover': {
                  bgcolor: '#65a30d',
                },
              }}
            >
              Kirim
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}
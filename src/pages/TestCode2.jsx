import { TextField, Stack, Button, Box } from '@mui/material'
import { useAuth } from '@/hooks/useAuth'
import { useState, useEffect } from "react";

export default function TestCode2() {
  const { user } = useAuth();

  return (
    <Box>
      <Stack direction="column" spacing={2}>
        <TextField fullWidth />
        <TextField multiline rows={4} />
        <Stack direction="row">
          <Button>Monkey</Button>
          <Button>Monkey2</Button>
        </Stack>
      </Stack>
    </Box>
  )
}
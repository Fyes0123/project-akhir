import { TextField, Stack, Button } from '@mui/material'
import { useAuth } from '@/hooks/useAuth'
import { useState, useEffect } from "react";


export default function Profile1() {
  const { user } = useAuth();

  return (
    <div>
      <span>TEST</span>
    </div>
  )
}
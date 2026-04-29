import { TextField, Stack, Button } from '@mui/material'
import { useAuth } from '@/hooks/useAuth'
import { useState, useEffect } from "react";


export default function TestCode() {
  const { user } = useAuth();

  return (
    <div>
      <span>TEST</span>
    </div>
  )
}
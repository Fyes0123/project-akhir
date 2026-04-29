import { Button, CircularProgress } from '@mui/material'

/**
 * MUI Button with built-in loading state.
 * Usage: <LoadingButton loading={isLoading} onClick={...}>Save</LoadingButton>
 */
export default function LoadingButton({ loading = false, children, disabled, ...props }) {
  return (
    <Button disabled={loading || disabled} {...props}>
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </Button>
  )
}

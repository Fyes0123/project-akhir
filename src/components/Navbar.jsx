import Button from '@mui/material/Button'
import { styles } from "../styles/adminStyle";
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

function Navbar() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()

    navigate('/login', {
      replace: true,
    })
  }

  return (
    <div style={styles.navbar}>
      <h3>Amartha Empower</h3>

      <div>

        <Button
              variant="contained"
              color="error"
              onClick={handleLogout}
              sx={{
                borderRadius: 1.5,
                px: 4,
                py: 1,
                textTransform: 'none',
                fontWeight: 700,
                boxShadow: 'none',

                '&:hover': {
                  boxShadow: 'none',
                },
              }}
            >
              Logout
            </Button>

      </div>
    </div>
  );
}

export default Navbar;
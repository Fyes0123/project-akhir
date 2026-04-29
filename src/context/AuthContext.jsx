import { createContext, useCallback, useMemo, useState } from 'react'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('auth_user')
    return stored ? JSON.parse(stored) : null
  })

  const login = useCallback((credentials) => {
    // Replace with real API call
    const mockUser = { id: 1, name: 'Admin', email: credentials.email, role: 'admin' }
    localStorage.setItem('auth_user', JSON.stringify(mockUser))
    setUser(mockUser)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('auth_user')
    setUser(null)
  }, [])

  const value = useMemo(() => ({ user, login, logout, isAuthenticated: !!user }), [user, login, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

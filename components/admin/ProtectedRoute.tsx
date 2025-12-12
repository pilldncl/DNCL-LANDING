'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { FiLoader } from 'react-icons/fi'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/verify')
      const data = await response.json()

      if (data.authenticated) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
        router.push('/admin')
      }
    } catch (error) {
      setIsAuthenticated(false)
      router.push('/admin')
    }
  }, [router])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <FiLoader className="animate-spin mx-auto mb-4 text-primary-600" size={32} />
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}


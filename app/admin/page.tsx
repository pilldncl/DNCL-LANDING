'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/admin/LoginForm'
import { FiLoader } from 'react-icons/fi'

export default function AdminPage() {
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/verify')
        const data = await response.json()
        
        if (data.authenticated) {
          // Already logged in, redirect to dashboard
          router.push('/admin/dashboard')
        } else {
          // Not authenticated, show login form
          setIsChecking(false)
        }
      } catch (error) {
        // Error checking auth, show login form
        setIsChecking(false)
      }
    }

    checkAuth()
  }, [router])

  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-primary-50 flex items-center justify-center p-4">
        <div className="text-center">
          <FiLoader className="animate-spin mx-auto mb-4 text-primary-600" size={32} />
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-primary-50 flex items-center justify-center p-4">
      <LoginForm />
    </div>
  )
}


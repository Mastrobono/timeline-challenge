'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { NotificationData, NotificationType } from '@/components/ui/Notification'

interface UseNotificationReturn {
  notification: NotificationData | null
  showNotification: (type: NotificationType, title: string, message: string) => void
  hideNotification: () => void
}

export function useNotification(): UseNotificationReturn {
  const [notification, setNotification] = useState<NotificationData | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const showNotification = useCallback((type: NotificationType, title: string, message: string) => {
    // Clear any existing timeout first
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    const id = crypto.randomUUID()
    setNotification({ id, type, title, message })

    // Auto-hide after 5 seconds
    timeoutRef.current = setTimeout(() => {
      setNotification(null)
      timeoutRef.current = null
    }, 5000)
  }, [])

  const hideNotification = useCallback(() => {
    // Clear timeout if manually closing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setNotification(null)
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return {
    notification,
    showNotification,
    hideNotification
  }
}


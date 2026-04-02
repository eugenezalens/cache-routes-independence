'use client'

import { useEffect, useRef, useState } from 'react'

export function useDelayedLoading(isLoading: boolean, delay = 150, minDuration = 300): boolean {
  const [showLoading, setShowLoading] = useState<boolean>(false)
  const shownAtRef = useRef<number | null>(null)
  const delayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (isLoading) {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
      }

      delayTimeoutRef.current = setTimeout(() => {
        shownAtRef.current = Date.now()
        setShowLoading(true)
      }, delay)

      return () => {
        if (delayTimeoutRef.current) {
          clearTimeout(delayTimeoutRef.current)
        }
      }
    }

    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current)
      delayTimeoutRef.current = null
    }

    if (!showLoading) {
      return
    }

    const elapsed = shownAtRef.current ? Date.now() - shownAtRef.current : 0
    const remaining = Math.max(0, minDuration - elapsed)

    hideTimeoutRef.current = setTimeout(() => {
      shownAtRef.current = null
      setShowLoading(false)
    }, remaining)

    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [isLoading, showLoading, delay, minDuration])

  return showLoading
}

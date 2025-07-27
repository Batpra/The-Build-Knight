import { useState, useEffect } from 'react'

interface PerformanceMetrics {
  loadTime: number
  renderTime: number
  memoryUsage: number
  connectionType: string
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    const calculateMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const memory = (performance as any).memory
      const connection = (navigator as any).connection

      const loadTime = navigation.loadEventEnd - navigation.loadEventStart
      const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
      const memoryUsage = memory ? memory.usedJSHeapSize / 1048576 : 0 // Convert to MB
      const connectionType = connection ? connection.effectiveType : 'unknown'

      setMetrics({
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memoryUsage * 100) / 100,
        connectionType
      })
    }

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      calculateMetrics()
    } else {
      window.addEventListener('load', calculateMetrics)
      return () => window.removeEventListener('load', calculateMetrics)
    }
  }, [])

  return metrics
}

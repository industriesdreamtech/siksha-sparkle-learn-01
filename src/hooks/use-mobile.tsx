
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Function to check if device is mobile
    const checkMobile = () => {
      const isMobileByWidth = window.innerWidth < MOBILE_BREAKPOINT
      const isMobileByUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      
      // Added touch check to better identify mobile devices
      const isTouchDevice = ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0) || 
        // @ts-ignore - For Safari iOS
        (navigator.msMaxTouchPoints > 0)
      
      // Either width-based, user-agent-based, or touch-based detection
      return isMobileByWidth || isMobileByUserAgent || isTouchDevice
    }
    
    // Set initial value - delay to ensure accurate window size after any transitions
    const initialTimer = setTimeout(() => {
      setIsMobile(checkMobile())
    }, 10)
    
    // Handle resize events
    const handleResize = () => {
      setIsMobile(checkMobile())
    }
    
    window.addEventListener("resize", handleResize)
    
    // Watch for orientation changes specifically on mobile
    window.addEventListener("orientationchange", handleResize)
    
    // Fallback to media query for devices that don't report correct width initially
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(checkMobile())
    }
    
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange)
    } else {
      // For older browsers
      mql.addListener(onChange)
    }
    
    return () => {
      clearTimeout(initialTimer)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
      
      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange)
      } else {
        // For older browsers
        mql.removeListener(onChange)
      }
    }
  }, [])

  return isMobile
}

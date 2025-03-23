
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Initialize with the current window size
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // More reliable way to handle resize events
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    window.addEventListener("resize", handleResize)
    
    // Fallback to media query for devices that don't report correct width initially
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(mql.matches)
    }
    
    mql.addEventListener("change", onChange)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      mql.removeEventListener("change", onChange)
    }
  }, [])

  // Always return a boolean (never undefined)
  return isMobile === undefined ? false : isMobile
}

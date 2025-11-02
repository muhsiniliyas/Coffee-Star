import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset
      
      // Show button after scrolling 300px
      if (scrolled > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Calculate scroll progress percentage
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled2 = window.pageYOffset
      const progress = windowHeight > 0 ? (scrolled2 / windowHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50">
          {/* Scroll Progress Ring */}
          <div className="relative">
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-gray-300 dark:text-gray-600"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - scrollProgress / 100)}`}
                className="text-amber-500 transition-all duration-300"
              />
            </svg>

            {/* Button */}
            <button
              onClick={scrollToTop}
              className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Tooltip - Desktop only */}
          <div className="hidden sm:block absolute bottom-full right-0 mb-3 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            Back to Top
            <div className="absolute top-full right-3 w-2 h-2 bg-gray-900 dark:bg-gray-700 transform rotate-45" />
          </div>
        </div>
      )}

      {/* Alternative Simple Version - Uncomment to use */}
      {/* {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50 p-2.5 sm:p-3 md:p-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:-translate-y-1 transition-transform" />
        </button>
      )} */}
    </>
  )
}

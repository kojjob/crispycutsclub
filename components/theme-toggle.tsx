'use client'

import { useTheme } from '@/lib/contexts/theme-context'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-crispy-bg-secondary animate-pulse" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-12 h-12 rounded-full bg-crispy-bg-secondary border border-crispy-border-primary hover:border-crispy-gold transition-all duration-300 overflow-hidden"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {/* Sun Icon */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
        theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
      }`}>
        <svg
          className="w-5 h-5 text-crispy-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>

      {/* Moon Icon */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
        theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
      }`}>
        <svg
          className="w-5 h-5 text-crispy-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-crispy-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </button>
  )
}

export function ThemeToggleMobile() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-12 bg-crispy-bg-secondary animate-pulse rounded" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-between w-full p-3 bg-crispy-bg-secondary hover:bg-crispy-bg-tertiary rounded transition-colors duration-200"
    >
      <span className="text-crispy-text-primary font-medium">
        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </span>
      
      <div className="relative w-14 h-7 bg-crispy-bg-tertiary rounded-full border border-crispy-border-primary">
        <div className={`absolute top-0.5 w-6 h-6 bg-crispy-gold rounded-full transition-all duration-300 ${
          theme === 'dark' ? 'left-0.5' : 'left-7'
        }`}>
          {/* Sun/Moon icon inside toggle */}
          <div className="flex items-center justify-center w-full h-full">
            {theme === 'dark' ? (
              <svg className="w-3 h-3 text-crispy-black" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-3 h-3 text-crispy-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}
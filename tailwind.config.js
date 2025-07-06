/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium color palette with theme support
        'crispy': {
          // Base colors
          'black': '#000000',
          'white': '#FFFFFF',
          'charcoal': '#1A1A1A',
          'gold': '#D4AF37',
          'success': '#0D5F3A',
          'error': '#8B0000',
          
          // Theme-aware colors using CSS variables
          'bg': {
            'primary': 'var(--bg-primary)',
            'secondary': 'var(--bg-secondary)',
            'tertiary': 'var(--bg-tertiary)',
            'accent': 'var(--bg-accent)',
          },
          'text': {
            'primary': 'var(--text-primary)',
            'secondary': 'var(--text-secondary)',
            'tertiary': 'var(--text-tertiary)',
            'inverse': 'var(--text-inverse)',
          },
          'border': {
            'primary': 'var(--border-primary)',
            'secondary': 'var(--border-secondary)',
            'accent': 'var(--border-accent)',
          },
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
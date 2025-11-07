/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Deep tech blue
        secondary: '#00FFAB', // Neon gfreen accent
        dark: '#0F172A', // Background dark
        light: '#F8FAFC', // Light for sections
        muted: '#94A3B8', // Muted gray text
        danger: '#EF4444', // For error states
        highlight: '#38BDF8' // Cyan-ish for hover/CTA
      },
      keyframes: {
        'fade-up-soft': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'reveal-up': {
          '0%': { opacity: 0, transform: 'translate3d(0, 32px, 0) scale(0.96)' },
          '55%': { opacity: 0.95, transform: 'translate3d(0, -6px, 0) scale(1.02)' },
          '100%': { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }
        },
        'reveal-right': {
          '0%': { opacity: 0, transform: 'translate3d(-36px, 0, 0) skewX(-2deg)' },
          '100%': { opacity: 1, transform: 'translate3d(0, 0, 0) skewX(0deg)' }
        },
        'reveal-scale': {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        'float-glow': {
          '0%, 100%': { transform: 'translateY(0px)', filter: 'drop-shadow(0 0 0 rgba(56, 189, 248, 0.25))' },
          '50%': { transform: 'translateY(-6px)', filter: 'drop-shadow(0 18px 42px rgba(56, 189, 248, 0.35))' }
        },
        'gradient-x': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        aurora: {
          '0%': { transform: 'translate3d(-12%, 0%, 0) scale(1)' },
          '50%': { transform: 'translate3d(12%, -10%, 0) scale(1.1)' },
          '100%': { transform: 'translate3d(-12%, 0%, 0) scale(1)' }
        },
        'float-bubble': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-22px) scale(1.05)' },
          '100%': { transform: 'translateY(0) scale(1)' }
        },
        'border-glow': {
          '0%, 100%': { boxShadow: '0 0 0 rgba(139, 92, 246, 0)' },
          '50%': { boxShadow: '0 0 28px rgba(139, 92, 246, 0.35)' }
        },
        sparkle: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(0.94)' },
          '50%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      animation: {
        'fade-up-soft': 'fade-up-soft 0.9s ease-out both',
        'reveal-up': 'reveal-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-right': 'reveal-right 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-scale': 'reveal-scale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'float-glow': 'float-glow 5s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease-in-out infinite',
        aurora: 'aurora 12s ease-in-out infinite',
        'float-bubble': 'float-bubble 10s ease-in-out infinite',
        sparkle: 'sparkle 3s ease-in-out infinite',
        'border-glow': 'border-glow 2.6s ease-in-out infinite'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}

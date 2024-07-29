/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      colors: {
        blueSecond: '#022B3A',
        greenAccent: '#679436',
        cyanMain: '#1F7A8C',
        whiteBg: '#F5F5F5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Para estilos de formularios
    require('@tailwindcss/typography'), // Para estilos de tipografía
    require('@tailwindcss/aspect-ratio'), // Para relación de aspecto responsiva
    require('@tailwindcss/line-clamp'), // Para truncado de texto
    require('@tailwindcss/aspect-ratio'), // Para relación de aspecto responsiva
    // Otros plugins según necesites
  ],
}


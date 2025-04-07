/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilita el modo oscuro manual mediante clases
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blus: '#101828',
        // Colores principales de la marca ABESAT
        brand: {
          light: '#1e40af', // azul-800 (modo claro)
          dark: '#93c5fd',  // azul-300 (modo oscuro)
          DEFAULT: '#1e40af',
        },
        // Colores para fondos
        background: {
          light: '#ffffff',
          dark: '#111827', // gray-900
          blues: '#4aa5df',
          blu: '#101828',
        },
        // Colores para texto
        text: {
          light: '#111827', // gray-900 (modo claro)
          dark: '#f3f4f6',  // gray-100 (modo oscuro)
                    
        },        
        // Colores para bordes
        border: {
          light: '#e5e7eb', // gray-200
          dark: '#374151',  // gray-700
        },
        // Colores para botones y elementos interactivos
        accent: {
          light: '#f59e0b', // amber-500
          dark: '#fbbf24',  // amber-400
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
      },
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark','hover','dark:hover'],
      textColor: ['dark','hover','dark:hover'],
      borderColor: ['dark','hover','dark:hover'],
      boxShadow: ['dark','hover','dark:hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1440px',
          },
        }
      })
    },
  ],
  darkMode: 'class'
}
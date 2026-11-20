/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo Charcoal Outline & Dark Sections
        navy: {
          950: '#171F24',
          900: '#242F36', // Exact logo outline charcoal
          800: '#2C3A42',
          700: '#384852',
          600: '#495B66',
        },
        // Logo Orange (Shirts & Circle Top)
        primary: {
          DEFAULT: '#F18022', // Exact logo vibrant orange
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F18022',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        // Logo Teal / Turquoise (Circle Bottom, Skirt & Pants)
        teal: {
          DEFAULT: '#32BEB6', // Exact logo turquoise
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#32BEB6',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        // Warm Child-Friendly Accents
        pastel: {
          orange: '#FFEDD5',
          teal: '#CCFBF1',
          yellow: '#FEF08A',
          amber: '#FDE68A',
          peach: '#FED7AA',
          rose: '#FECDD3',
          purple: '#E9D5FF',
          sky: '#E0F2FE',
          green: '#DCFCE7'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 47, 54, 0.08)',
        'soft-lg': '0 10px 30px -4px rgba(36, 47, 54, 0.12)',
        'card': '0 2px 12px rgba(36, 47, 54, 0.06)',
        'orange': '0 10px 25px -3px rgba(241, 128, 34, 0.3)',
        'teal': '0 10px 25px -3px rgba(50, 190, 182, 0.3)',
      }
    },
  },
  plugins: [],
}

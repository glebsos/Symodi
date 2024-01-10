/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '22px',
        sm: '2rem',
        lg: '4rem',
        xl: '6em',
        '2xl': '22px',
      },
    },
    extend: {
      spacing: {
        
      }
    },
    colors: {
      "white": "#FFFFFF",
      "Grey": "#E4E5F3",
      "Dark-grey": "#8E90AC",
      "Background": "#212236",
      "Dark-tone": "#27283B",
      "Blue": "#2B84FF",
      "Accent-Blue": "#15ABFF",
      "Blue-20": "#2B84FF",
      "Orange": "#FFB800",
      "Accent-Orange": "#FFF500",
      "Orange-20": "#FFB800",
      "Shade-of-dark": "#424360",
      "Dark-accents": "#2D2D42",
      "Green": "#00CA51",
      "Accent-Green": "#05FF64",
      "Green-20": "#00CA51",
      "Red": "#DD2B2D",
      "Accent-Red": "#FF1F21",
      "Red-20": "#DD2B2D"
    },
    fontFamily: {
      "Manrope": "Manrope, sans-serif",
    }
  },
  plugins: [],
}


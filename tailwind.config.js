/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind"

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        vibrantBlue: '#3B82F6',   // "Pay" color
        richPurple: '#6C5CE7',    // "Guard" color
        tealBlue: '#1ABC9C',      // Icon color
        silverGray: '#BDC3C7',    // For subtle sections
        softGold: '#F1C40F',      // Accent color
        lightGray: '#F5F5F5',     // Background
        softLavender: '#EDE7F6',  // Secondary background
        darkGray: '#333333',      // Text color for contrast
        charcoalBlack: '#111111', // Darker text color
        mintGreen: '#2ECC71',     // Success messages
        coralRed: '#E74C3C',      // Error/alert messages

        //dark theme
        darkCharcoal: '#1E1E2C',
        mutedPurple: '#3D3C54',
        softWhite: '#E0E0E0',
        mutedGray: '#B0B0B0',
        lighterVibrantBlue: '#5A9DF9',
        mintGreenDark: '#27AE60',
        coralRedDark: '#E74C3C',
      }
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}
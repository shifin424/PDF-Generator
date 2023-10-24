/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary_dark : "#050a19",
        secondary_dark : "#032046",
        primary_light : "#F0FCFF",
        secondary_light : "#FDD3D3",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


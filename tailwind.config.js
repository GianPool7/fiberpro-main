/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // ⬅️ Importante para que analice tus archivos
  ],
  theme: {
    extend: {
      colors:{
        'azul':'#002ccc',
        'naranja':'#FF4C00',
        'celeste':'#11F5F7',
      }
    },
  },
  plugins: [],
}

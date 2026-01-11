export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00FFFF',
        accent: '#FF00FF',
        bg: '#000000',
        surface: '#0D0D0D',
        text: '#FFFFFF',
        border: '#1A1A1A'
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif']
      }
    }
  },
  plugins: []
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': 'url(/img/bg-main.png)',
        'main-tablet': 'url(/img/bg-main-tablet.png)',
        'main-desktop': 'url(/img/bg-main-desktop.png)',
        'paper': 'url(/img/bg-paper.png)',
        'text': 'url(/img/bg-text.png)',
        'karaoke': 'url(/img/cards/karaoke.png)',
        'restaurant': 'url(/img/cards/restaurant.png)',
        'bar': 'url(/img/cards/bar.png)',
        'horary': 'url(/img/bg-horary.png)',
        'footer': 'url(/img/bg-footer.png)'
      },
      colors:{
        'bluejays':'#0073B2',
        'yellowjays': '#E8A800',
        'grayjays': '#E1E3E8'
      },
      boxShadow: {
        'card': '4px 6px 10px 0px rgba(0, 0, 0, 0.55);'
      },
      width: {
        '100': '482px'
      },
      height: {
        '100': '514px'
      }
    },
  },
  plugins: [],
}

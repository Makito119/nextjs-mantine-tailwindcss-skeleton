/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    /* Mantineと一致させる: https://mantine.dev/theming/responsive */
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    },
    minHeight: {
      screen: ['100vh', '100dvh'],
    },
    maxHeight: {
      screen: ['100vh', '100dvh'],
    },
    // 拡張するためデフォルトのものも使える
    extend: {
      // colors: {
      //   blue: {
      //     white: '#CBE4FD',
      //     light: '#73AFEB',
      //     sky: '#E7EFF7',
      //     main: '#002076',
      //     dark: '#00104A',
      //     text: '#081F71',
      //   },
      //   grey: { light: '#7C7C7C', offWhite: '#F9F9F9', ranking: '#F2F2F2' },
      //   purple: { light: '#9B7BD8' },
      //   black: { form: '#333333' },
      //   green: { main: '#63B7A7', light: '#E1EFED', turquoise: '#1E6572' },
      //   pink: { main: '#E861AA' },
      //   red: { text: '#E62323' },
      // },
      // height: {
      //   header: '3rem',
      //   footer: '4rem',
      //   screen: ['100vh', '100dvh'],
      //   safelog: ['60vh', '60svh'],
      //   18: '4.5rem',
      // },
      // margin: {
      //   content: '3rem 0 5rem 0',
      // },
      // lineHeight: {
      //   12: '3rem' /* 48px */,
      // },
      // boxShadow: {
      //   default: '0px 0px 30px 0px #dedbdb',
      // },
    },
  },
  plugins: [],
  important: true, // tailwind cssの優先度を!importantにする
};

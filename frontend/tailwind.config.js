module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    sm: { min: '640px', max: '767px' },
    // => @media (min-width: 640px and max-width: 767px) { ... }

    md: { min: '768px', max: '1023px' },
    // => @media (min-width: 768px and max-width: 1023px) { ... }

    lg: { min: '1024px', max: '1279px' },
    // => @media (min-width: 1024px and max-width: 1279px) { ... }

    xl: { min: '1280px', max: '1535px' },
    // => @media (min-width: 1280px and max-width: 1535px) { ... }

    '2xl': { min: '1536px' },
    // => @media (min-width: 1536px) { ... }
    extend: {
      screens: {
        xxxs: {
          min: '320px',
          max: '374px',
        },
        xxs: {
          min: '375px',
          max: '424px',
        },
        xs: {
          min: '425px',
          max: '639px',
        },
      },
      width: {
        15: '30%',
        97: '48rem',
        98: '23%',
      },
    },
  },
  plugins: [],
};

const plugin = require('tailwindcss/plugin');

const invertHex = (hex) => (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();

module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      maxHeight: {
        '20': '5rem',
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {
    display: ['responsive', 'group-hover'],
    /**
     * добавляем варианты https://tailwindcss.com/docs/configuring-variants описаные в плагине ниже
     * для цвета текста, рамок и фона
     */
    textColor: ['dark', 'light'],
    backgroundColor: ['dark', 'light'],
    borderColor: ['dark', 'light'],
  },
  plugins: [
    /**
     * плагин для смены темы добавляет классы вида
     * .light .light:text-gray-600
     * что позволяет очень удобно описывать стили
     * применяемые при переключении темы
     * 
     * доки по плагинам tailwindcss 
     * https://tailwindcss.com/docs/plugins#adding-variants
     */

    plugin(function({ addVariant, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark .${e(`dark${separator}${className}`)}`
        })
      });
      addVariant('light', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.light .${e(`light${separator}${className}`)}`
        })
      });
    }),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}

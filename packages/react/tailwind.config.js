/** @type {import('tailwindcss').Config} */

import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@sunset-ui/tokens'

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      color: colors,
      font: fonts,
      fontSize: fontSizes,
      fontWeight: fontWeights,
      lineHeight: lineHeights,
      margin: space,
      padding: space,
      borderRadius: radii,
    },
  },
  plugins: [],
}

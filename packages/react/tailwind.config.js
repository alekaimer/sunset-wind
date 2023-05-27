/** @type {import('tailwindcss').Config} */

import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@sunset-wind/tokens'

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: fontSizes,
    colors: colors,
    fontWeight: fontWeights,
    fontFamily: fonts,
    lineHeight: lineHeights,
    margin: space,
    padding: space,
    borderRadius: radii,
    // extend: {
    // },
  },
  plugins: [],
}

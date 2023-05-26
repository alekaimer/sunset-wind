import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@sunset-wind/tokens'

interface Theme {
  colors: typeof colors
  fonts: typeof fonts
  fontSizes: typeof fontSizes
  fontWeights: typeof fontWeights
  lineHeights: typeof lineHeights
  radii: typeof radii
  space: typeof space
}

export const theme: Theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
}

import { themes } from '@storybook/theming'

import '@sunset-ui/react/dist/styles.css'
// import '@sunset-ui/react/src/styles/styles.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}

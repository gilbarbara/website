import { mergeTheme } from '@gilbarbara/components';

export const primaryColor = '#ff0044';
export const secondaryColor = '#00eeff';
export const darkColor = '#002224'; // '#3d0011' dark red

export const theme = mergeTheme({
  darkMode: true,
  colors: { primary: primaryColor, secondary: secondaryColor },
});

import { createTheme } from '@mui/material/styles';
import { primaryColor, neutralColor } from './colors'

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      constrastText: "#ffffff",
    },
    text: {
        primary: neutralColor
    }
  },
});

export default theme
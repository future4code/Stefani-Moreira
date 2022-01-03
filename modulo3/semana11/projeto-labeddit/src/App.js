import React from "react";
import Routes from "./routes/routes";
import theme from "./constants/theme"
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

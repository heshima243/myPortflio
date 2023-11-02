import Appbar from "./component/Appbar";
import Intro from "./component/Intro";
import { ThemeProvider } from "@emotion/react";
import { Box, Stack, createTheme } from "@mui/material";

function App() {
  const darkTheme = createTheme({
   
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Appbar />
      <Intro />
    </ThemeProvider>
  );
}

export default App;

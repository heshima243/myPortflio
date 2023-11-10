import Appbar from "./component/Appbar";

import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";

import "./App.css";
import Presentation from "./component/Presentation";

import About from "./component/constant/About";
import Footer from "./component/constant/Footer";
import Stack from "./component/constant/Stack";

import RecentProject from "./component/cardProject/RecentProject";
import AppFooter from "./component/blocks/AppFooter";

function App() {
  const darkTheme = createTheme({});

  return (
    <>
      <section className="App-header">
        <Appbar />
        <Presentation />
        <RecentProject />

        <ThemeProvider theme={darkTheme}>
          <Stack />
          <About />
          <Footer />
        </ThemeProvider>
        <AppFooter />
      </section>

      {/* <Project/> */}
    </>
  );
}

export default App;

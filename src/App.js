import Appbar from "./component/Appbar";
import Intro from "./component/Intro";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import { Index } from "./component/animation/Index";
import UserCard from "./component/UserCard";
import "./App.css";
import Presentation from "./component/Presentation";
import Experience from "./component/constant/Experience";
import Skills from "./component/constant/Skills";
import About from "./component/constant/About";
import Footer from "./component/constant/Footer";
import Stack from "./component/constant/Stack";

function App() {
  const darkTheme = createTheme({});

  return (
    <>
      <section className="App-header">
        <Appbar />
        <Presentation />

        <ThemeProvider theme={darkTheme}>
          <About />
          <Footer />
          <Stack />
        </ThemeProvider>
      </section>
    </>
  );
}

export default App;

import Appbar from "./component/Appbar";
import Intro from "./component/Intro";
import { ThemeProvider } from "@emotion/react";
import { Box, Stack, createTheme } from "@mui/material";
import { Index } from "./component/animation/Index";
import UserCard from './component/UserCard'
import "./App.css";

function App() {
  const darkTheme = createTheme({});

  return (
    <section className="App-header">
      <ThemeProvider theme={createTheme}>
        <Appbar />
        <Intro />
      </ThemeProvider>
        <UserCard/>
    </section>
  );
}

export default App;

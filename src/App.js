import Appbar from "./component/Appbar";
import Intro from "./component/Intro";
import { ThemeProvider } from "@emotion/react";
import { Box, Stack, createTheme } from "@mui/material";
import { Index } from "./component/animation/Index";
import UserCard from "./component/UserCard";
import "./App.css";
import Presentation from "./component/Presentation";

function App() {
  const darkTheme = createTheme({});

  return (
    <>
      <Appbar />
      <Presentation />
    </>
  );
}

export default App;

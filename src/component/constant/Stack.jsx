import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";

import { icons } from "../icons/icons";
import Icon from "./Icon";

export default function Stack() {
  const CustomBox = styled(Box)(({ theme }) => ({
    // maxWidth: "1300px",
    display: "flex",
    justifyContent: "space-between",
    mx: "auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const StackBox = styled(Box)(({ theme }) => ({
    marginLeft: "1.5rem",
    flex: 1,
    display: "flex",
    justifyContent: "space-around",

    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "3rem",
    },
  }));

  return (
    <Container>
      <CustomBox sx={{ my: 5, padding: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{ color: "white", textAlign: "center", mb: 3 }}
          >
            Versality is key
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "white", textAlign: "center", mb: 3 }}
          >
            Here's what i can help you with
          </Typography>
        </Box>

        <StackBox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {icons.map((icon, i) => {
              if (i < 2) {
                return <Icon key={icon.id} name={icon.name} src={icon.src} />;
              } else {
                return "";
              }
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {icons.map((icon, i) => {
              if (i >= 2 && i < 4) {
                return <Icon key={icon.id} name={icon.name} src={icon.src} />;
              } else {
                return "";
              }
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {icons.map((icon, i) => {
              if (i >= 4 && i < 6) {
                return <Icon key={icon.id} name={icon.name} src={icon.src} />;
              } else {
                return "";
              }
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {icons.map((icon, i) => {
              if (i >= 6) {
                return <Icon key={icon.id} name={icon.name} src={icon.src} />;
              } else {
                return "";
              }
            })}
          </Box>
        </StackBox>
      </CustomBox>
    </Container>
  );
}

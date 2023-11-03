import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { typographyClasses } from "@mui/joy/Typography";
import Instagram from "@mui/icons-material/Instagram";

const backImage = [
  {
    path: "https://previews.123rf.com/images/artemfurman/artemfurman1310/artemfurman131000009/24561268-the-blue-and-white-background-with-transparent-molecules.jpg",
  },
];

export default function TwoSidedLayout({
  children,
  reversed,
}: React.PropsWithChildren<{ reversed?: boolean }>) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backImage[0].path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // maxHeight: "92vh",
        // position:'relative'
       
      }}
    >
      <Container
        sx={(theme) => ({
          position: "relative",
          backgroundImage: `url(${backImage[0].path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // minHeight: "50vh",
          display: "flex",
          flexDirection: reversed ? "column-reverse" : "column",
          alignItems: "center",
          py: 0,
          gap: 4,
          [theme.breakpoints.up(834)]: {
            flexDirection: "row",
            gap: 6,
          },
          [theme.breakpoints.up(1199)]: {
            gap: 12,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            maxWidth: "50ch",
            textAlign: "center",
            flexShrink: 999,
            [theme.breakpoints.up(834)]: {
              minWidth: 420,
              alignItems: "flex-start",
              textAlign: "initial",
            },
            [`& .${typographyClasses.root}`]: {
              textWrap: "balance",
            },
          })}
        >
          {children}
        </Box>
        <AspectRatio
          ratio={600 / 520}
          variant="plain"
          maxHeight={300}
          sx={(theme) => ({
          
            minWidth: 300,
            alignSelf: "stretch",
            [theme.breakpoints.up(834)]: {
              alignSelf: "initial",
              flexGrow: 1,
              "--AspectRatio-maxHeight": "200px",
              "--AspectRatio-minHeight": "700px",
            },
            borderRadius: "sm",
            flexBasis: "50%",
          })}
        >
          <img
            style={{ objectFit: "contain" }}
            src="https://lh3.googleusercontent.com/a/ACg8ocLM55Nk87v_okNbi9e7i5FqbVEexMphS3dFfkY74vMdTX9JmCopCA3mONG_QSVhrGLITTniY9BFwSz9nkODIl-eTQ=s360-c-no"
            alt="https://lh3.googleusercontent.com/a/ACg8ocLM55Nk87v_okNbi9e7i5FqbVEexMphS3dFfkY74vMdTX9JmCopCA3mONG_QSVhrGLITTniY9BFwSz9nkODIl-eTQ=s360-c-no"
          />
        </AspectRatio>
      </Container>
    </Box>
  );
}

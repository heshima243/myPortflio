import React from "react";
import { Card } from "antd";
import {
  Container,
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const images = [
  {
    imgPath:
      "https://i.pinimg.com/736x/6e/57/36/6e5736f49eba2e7c02980c284b46f756.jpg",
    title: "Full-Stack Blog: React, Express, and MongoDB",
    description: "https://jul-blog.vercel.app/",
  },
  {
    imgPath:
      "https://i.pinimg.com/736x/3f/4b/97/3f4b977239687f87feabda7add3ca0f5.jpg",
    title: "A WeatherApp using the weatherStack API",
    description: "https://heshima-meteo.netlify.app/",
  },
  {
    imgPath:
      "https://i.pinimg.com/736x/a3/51/cb/a351cb9228eb61b6d6567fdb389d0973.jpg",
    title: "showcase website using React and Sanity",
    description: "https://ilc-center.vercel.app/",
  },
  {
    imgPath:
      "https://i.pinimg.com/736x/33/d2/d0/33d2d0e152c65a19081b3928b442dc7e.jpg",
    title: "Integration of a phony store with the fake-store API",
    description: "https://heshima-store-online.vercel.app",
  },
  {
    imgPath:
      "https://i.pinimg.com/736x/c1/30/c1/c130c14e7e660837cf603f5c344c46c2.jpg",
    title: "Store Dashboard Interface",
    description: "https://dashboarb-heshima.vercel.app/",
  },
  {
    imgPath:
      "https://i.pinimg.com/736x/37/ee/89/37ee8927aebb2076f0b94a2e6e16e493.jpg",
    title: "Integration of Movie data base with the imdb API",
    description: "https://heshima-movie.netlify.app/",
  },
];

export default function CardProject({ SkillsRef }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { Meta } = Card;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: isSmallScreen ? "center" : "start",
          alignItems: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {images.map((image, index) => (
          <Stack sx={{textDecoration:'none', transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.05)",
            cursor: "pointer", 
          },}} component={Link} to={image.description} target="_blank">
            <Card
              key={index}
              bordered
              hoverable
              style={{ width: 340 }}
              cover={<img alt={image.title} src={image.imgPath} />}
            >
              <Card.Meta
                component={Link}
                title={image.title}
                description={image.description}
              />
            </Card>
          </Stack>
        ))}
      </Box>
      <Typography
        id="skills-container"
        ref={SkillsRef}
        variant="h1"
        color="initial"
      ></Typography>
    </Container>
  );
}

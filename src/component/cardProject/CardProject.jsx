import React from "react";
import { Card } from "antd";
import { Container, Box, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";



const images = [
  {
    imgPath:
      "https://i.pinimg.com/736x/6e/57/36/6e5736f49eba2e7c02980c284b46f756.jpg",
    title: "Full-Stack Blog: React, Express, and MongoDB",
    description:'https://jul-blog.vercel.app/'
  },
  {
    imgPath:
      "https://i.pinimg.com/736x/3f/4b/97/3f4b977239687f87feabda7add3ca0f5.jpg",
    title: "WeatherApp using API",
    description:'https://heshima-meteo.netlify.app/'
  },
  {
    imgPath:
      "https://i.pinimg.com/736x/a3/51/cb/a351cb9228eb61b6d6567fdb389d0973.jpg",
    title: "showcase website using React and Sanity",
    description:'https://ilc-center.vercel.app/'
  },
  {
    imgPath:
      'https://i.pinimg.com/736x/33/d2/d0/33d2d0e152c65a19081b3928b442dc7e.jpg',
    title: "Fake-Store connected to API fake-store",
    description:'https://heshima-store-online.vercel.app'
  },
 
];

export default function CardProject() {
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
          gap:3,
          flexWrap:'wrap'
        }}
      >
        {images.map((image, index) => (
          <Card
            key={index}
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
        ))}


      </Box>
    </Container>
  );
}




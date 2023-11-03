/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Button from "@mui/joy/Button";

import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "../TwoSidedLayout";
import { Link } from "react-router-dom";

export default function HeroLeft01() {
  return (
    <TwoSidedLayout >
      <Typography color="warning" fontSize="lg" fontWeight="lg" sx={{marginTop:'5rem'}}>
        Heshima Lunyungu Julien
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        I'm always <span style={{color:'orange'}}> happy</span> to connect with new <span style={{color:'orange'}}>people </span> and explore
        new opportunitie
      </Typography>
      <Typography fontSize="lg" fontWeight="lg"  sx={{color: '#333'}} lineHeight="lg">
        I'm on a journey to become a full-stack JavaScript developer
      </Typography>
      <Button
        size="lg"
        variant="solid"
        color="warning"
        endDecorator={<ArrowForward fontSize="xl" />}
      >
        Get Started
      </Button>
      <Typography>
        Visit my Github{" "}
        <Link
          style={{ textDecoration: "none", color: "blue" }}
          to="https://github.com/heshima243"
          target="_blank"
          fontWeight="lg"
        >
          here
        </Link>
      </Typography>

    
    </TwoSidedLayout>
  );
}

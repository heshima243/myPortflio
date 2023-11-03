/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../TwoSidedLayout';

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography color="warning" fontSize="lg" fontWeight="lg">
      Heshima Lunyungu Julien
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        I'm always happy to connect with new people and explore new opportunitie
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
      I'm on a journey to become a full-stack JavaScript developer
      </Typography>
      <Button size="lg" variant='solid' color='warning' endDecorator={<ArrowForward fontSize="xl" />}>
        Get Started
      </Button>
      <Typography>
        Visit my Github <Link to='https://github.com/heshima243' _target='blank' fontWeight="lg">here</Link>
      </Typography>

      {/* <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        HeroLeft01
      </Typography> */}
    </TwoSidedLayout>
  );
}

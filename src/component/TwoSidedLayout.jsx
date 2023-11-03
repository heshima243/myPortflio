import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { typographyClasses } from '@mui/joy/Typography';
import Instagram from '@mui/icons-material/Instagram';

const backImage =[{
    path:'https://www.shutterstock.com/image-illustration/white-molecule-atom-abstract-clean-260nw-1130828390.jpg'
}]

export default function TwoSidedLayout({
    
  children,
  reversed,
}: React.PropsWithChildren<{ reversed?: boolean }>) {
  return (
    <Box    sx={{
        backgroundImage: `url(${backImage[0].path})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
       
      }}>

    <Container
      sx={(theme) => ({
        position: 'relative',
      
        minHeight: '100vh',
        display: 'flex',
        flexDirection: reversed ? 'column-reverse' : 'column',
        alignItems: 'center',
        py: 10,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
      >
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          maxWidth: '50ch',
          textAlign: 'center',
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: 'flex-start',
            textAlign: 'initial',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
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
          alignSelf: 'stretch',
          [theme.breakpoints.up(834)]: {
            alignSelf: 'initial',
            flexGrow: 1,
            '--AspectRatio-maxHeight': '520px',
            '--AspectRatio-minHeight': '400px',
          },
          borderRadius: 'sm',
        //   bgcolor: 'background.level2',
          flexBasis: '50%',
        })}
      >
        <img
        style={{objectFit:'cover'}}
          src="https://o.remove.bg/downloads/3edf4868-6eec-4396-8a26-1b2af9c61f5d/julio-removebg-preview.png"
          alt="https://avatars.githubusercontent.com/u/137094885?v=4"
        />
      
        
      </AspectRatio>
    </Container>
        </Box>
  );
}

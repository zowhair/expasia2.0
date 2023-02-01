import * as React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import PopoverMenu from './PopoverMenu';
import routes from './routes';
import Nav from './layout/Navbar';
import { Box } from '@mui/system';
import MainSlider from "./components/MainSlider";

const styles = {
  paperContainer: {
      backgroundImage: `url('https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=1380')`
  }
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#" >
        Expedition Asia Trek & Tours
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <Nav routes={routes} />
      <MainSlider height="720px" style={styles} />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant='h4' component="h1" gutterBottom>
            Expedition Asia Trek & Tours
          </Typography>
          <Routes>
            {routes.map(({ path, element }, key) => element && <Route key={key} path={path} element={element}
             />)}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Box>
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        </div>
        <div className="my-4">
          {/* <PopoverMenu /> */}
          <Copyright />
        </div>
      </Container>
    </>
  );
}

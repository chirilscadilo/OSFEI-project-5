import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
// import { IconButton } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 , width: `100%`}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'>
              <Button sx={{color:`white`}}>Home</Button>  
            </Link>
            <Link to='/store'>
              <Button sx={{color:`white`}}>Store</Button>  
            </Link>
          </Typography>
          {/* <IconButton >
            <AddShoppingCartIcon sx={{color:`white`, position:`relative`, width: `2rem`, height:`2rem`}}/>
            <Box sx={{color:`white`, backgroundColor:`red`, borderRadius:`50%`, width: `1.5rem`, height:`1.5rem`}}>3</Box> 
          </IconButton> */}
          <Link to='/favorite'>
              <Button sx={{color:`white`}}>Favorites</Button>  
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
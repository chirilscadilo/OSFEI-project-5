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
        <Toolbar sx={{display:'flex', justifyContent:'flex-end'}}>
          <Link to='/'>
              <Button sx={{color:`white`}}>Store</Button>  
          </Link>
          <Link to='/favorite'>
              <Button sx={{color:`white`}}>Favorites</Button>  
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
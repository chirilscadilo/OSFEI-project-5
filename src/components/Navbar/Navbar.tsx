import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { IconButton } from '@mui/material';

function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 , width: `100%`}}>
      <AppBar position="static">
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
          <Box>
            <Link to='/'>
            <IconButton sx={{'&:hover':{backgroundColor:'#095ded'}}}>
              <MenuBookIcon fontSize='large' sx={{color:'white'}}/>
            </IconButton>
            </Link>
          </Box>

          <Box>
            <Link to='/'>
                <Button sx={{color:`white`, '&:hover':{backgroundColor:'#095ded'}}}>Store</Button>  
            </Link>
            <Link to='/favorite'>
                <Button sx={{color:`white`, '&:hover':{backgroundColor:'#095ded'}}}>Favorites</Button>  
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
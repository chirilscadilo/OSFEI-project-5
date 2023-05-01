import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useAppSelector } from '../hooks/reduxHooks';
import Typography from '@mui/material/Typography/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useAppDispatch } from '../hooks/reduxHooks';
import { getBookFavorite } from '../state/favoriteSlice';

const BookDetail=()=>{
    const dispatch = useAppDispatch();
    let {id,title,
    subtitle,
    thumbnail,
    bookInfo} = useAppSelector(state=>state.bookDetail);
    return (
    <React.Fragment>
        <CssBaseline />
        <Container fixed>
        <Box sx={{height: '100vh', width: '100%'}}>
            <Typography variant="h4" sx={{width: '100%', marginTop: 3}}>{title}</Typography>
            <Typography>{subtitle}</Typography> 
            <img src={thumbnail} alt='Book'/>
            <Typography>{bookInfo}</Typography>

            <Link to={`/favorite`}>
                <Button size="small" onClick={()=>{dispatch(getBookFavorite({id, title, subtitle, thumbnail, bookInfo}))}}>Add to Favorite</Button>
            </Link>
        </Box>
        </Container>
    </React.Fragment>
    );
    }

export default BookDetail;
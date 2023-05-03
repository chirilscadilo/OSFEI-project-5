import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import { useGetBooksByIdQuery } from '../api/getBooks-slice';
import { useAppDispatch } from '../hooks/reduxHooks';
import { getBookFavorite } from '../state/favoriteSlice';

const BookDetail=()=>{
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const {data:book} = useGetBooksByIdQuery(id?`${id}`:'');
    return (
    <React.Fragment>
        <CssBaseline />
        <Container fixed>
        <Box sx={{height: '100vh', width: '100%'}}>
            <Typography variant="h4" sx={{width: '100%', marginTop: 3}}>{book?.volumeInfo.title}</Typography>
            <Typography>{book?.volumeInfo?.subtitle}</Typography> 
            <CardMedia
            sx={{maxWidth:138, height: 192, marginTop:2}}
            image={book?.volumeInfo.imageLinks?.thumbnail}
            />
            <Typography variant="body2" color="text.secondary">{book?.volumeInfo?.description}</Typography>
            <br/>
            <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
                Authors: {book?.volumeInfo?.authors?.map((author, index)=>(index===0? author :','+ ' ' + author)) || 'Unknown'} 
            </Typography>
            
            <Link to={`/favorite`}>
                <Button size="small" 
                onClick={()=>{dispatch(getBookFavorite(book!))}}
                sx={{marginTop:2}}
                >Add to Favorite</Button>
            </Link>
        </Box>
        </Container>
    </React.Fragment>
    );
    }

export default BookDetail;
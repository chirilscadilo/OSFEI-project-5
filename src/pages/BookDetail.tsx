import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from 'react-router-dom';
import { useGetBooksByIdQuery } from '../api/getBooks-slice';
import { useAppSelector } from '../hooks/reduxHooks';
import { useAppDispatch } from '../hooks/reduxHooks';
import { getBookFavorite } from '../state/favoriteSlice';
import { removeBookFavorite } from "../state/favoriteSlice";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BookDetail=()=>{
    const navigate =useNavigate();
    const dispatch = useAppDispatch();
    const favoriteBooks = useAppSelector(state=>state.favorite); 
    const {id} = useParams();
    const {data:book, isLoading, isError} = useGetBooksByIdQuery(id?`${id}`:'');
    const existingFavoriteBook = favoriteBooks.bookFavorite.find((item)=>(item.id === id));

    if(isLoading){
        return(
        <Typography sx={{fontSize: 20, textAlign:'center'}}>Loading...</Typography>)
    };

    if(isError){
        return(
        <>
        <Typography sx={{fontSize: 20, textAlign:'center', color: 'red'}}>Something went wrong</Typography>
        <Link to='/'>
            <Button>Go Back</Button>
        </Link>
        </>
    )};
    
    return (
    <React.Fragment>
        <CssBaseline />
        <Container fixed>
        <Box sx={{height: '100vh', width: '100%'}}>

            <Button size='medium' onClick={() => navigate(-1)}>Go Back</Button>

            <Typography variant="h4" sx={{width: '100%', marginTop: 3}}>{book?.volumeInfo.title}</Typography>
            <Typography>{book?.volumeInfo?.subtitle}</Typography> 
            <CardMedia
            sx={{maxWidth:138, height: 192, marginTop:2}}
            image={book?.volumeInfo?.imageLinks?.thumbnail}
            />
            <Typography variant="body2" color="text.secondary">{book?.volumeInfo?.description}</Typography>
            <br/>
            <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
                Authors: {book?.volumeInfo?.authors?.map((author, index)=>(index===0? author :','+ ' ' + author)) || 'Unknown'} 
            </Typography>

            { existingFavoriteBook?
                <Button size="small" sx={{marginTop:2, fontSize: 16, color:'#ed6d76'}} onClick={()=>{dispatch(removeBookFavorite({id:id}))}}>
                    Remove from Favorites
                </Button>
                :
                <Button size="small" onClick={()=>{dispatch(getBookFavorite(book!))}} sx={{marginTop:2, fontSize: 16}}>Add to Favorite</Button>
            }
        </Box>
        </Container>
    </React.Fragment>
    );
    }

export default BookDetail;
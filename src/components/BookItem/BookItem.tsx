import React from "react";
import { Book } from "../../models/booksInterface";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useAppDispatch } from "../../hooks/reduxHooks";
import { getBookFavorite } from "../../state/favoriteSlice";

interface BookItemProps{
    book: Book;
}

const BookItem:React.FC<BookItemProps>= ({book}) =>{
    const dispatch = useAppDispatch();
    return (
        <Box sx={{display:'inline-block', margin: 2}}>
            <Card sx={{ width: 345 , height: 550}}>
                <CardMedia
                sx={{maxWidth:138, height: 192, alignItems: 'center',marginTop:2, marginLeft: 'auto', marginRight: 'auto'}}
                image={book?.volumeInfo?.imageLinks?.thumbnail}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {book.volumeInfo.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book?.searchInfo?.textSnippet}
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
                        Authors: {book?.volumeInfo?.authors?.map((author, index)=>(index===0? author :','+ ' ' + author)) || 'Unknown'} 
                    </Typography>
                </CardContent>
                <CardActions sx={{display:'flex', justifyContent:'space-evenly'}}>
                    <Link to={`/book/${book.id}`}>
                        <Button size="small" >Learn More</Button>
                    </Link>
                    <Link to={`/favorite`}>
                        <Button size="small" onClick={()=>{dispatch(getBookFavorite(book))}}>Add to Favorite</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    )
}

export default BookItem;
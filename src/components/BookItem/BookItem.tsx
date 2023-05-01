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
import { getDetail } from "../../state/bookDetailSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { getBookFavorite } from "../../state/favoriteSlice";

interface BookItemProps{
    book: Book;
}

const BookItem:React.FC<BookItemProps>= ({book}) =>{
    const dispatch = useAppDispatch();
    let id = book.id;
    let title = book.volumeInfo.title;
    let subtitle = book.volumeInfo.subtitle;
    let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
    let bookInfo = book.searchInfo && book.searchInfo.textSnippet;
    return (
        <Box sx={{display:'inline-block', margin: 2}}>
            <Card sx={{ maxWidth: 345 , minHeight: 500}}>
                <CardMedia
                sx={{ height: 140 }}
                image={thumbnail}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {book.volumeInfo.title}
                    </Typography>
                    <Typography gutterBottom>
                        {book.volumeInfo.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {bookInfo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/book/${book.id}`}>
                        <Button size="small" onClick={()=>{dispatch(getDetail({id, title, subtitle, thumbnail, bookInfo}))}}>Learn More</Button>
                    </Link>
                    <Link to={`/favorite`}>
                        <Button size="small" onClick={()=>{dispatch(getBookFavorite({id, title, subtitle, thumbnail, bookInfo}))}}>Add to Favorite</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    )
}

export default BookItem;
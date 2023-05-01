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
    let authors = book.volumeInfo.authors;
    return (
        <Box sx={{display:'inline-block', margin: 2}}>
            <Card sx={{ maxWidth: 345 , height: 550}}>
                <CardMedia
                sx={{maxWidth:138, height: 192, alignItems: 'center',marginTop:2, marginLeft: 'auto', marginRight: 'auto'}}
                image={thumbnail}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {book.volumeInfo.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {bookInfo}
                    </Typography>
                    <br/>
                    {authors ?
                    <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
                        Authors: {authors[0]}
                        {authors.slice(1,authors.length).map((autor)=>(','+' ' + autor))}
                    </Typography>
                    : 
                    <Typography></Typography>
                    }
                </CardContent>
                <CardActions>
                    <Link to={`/book/${book.id}`}>
                        <Button size="small" onClick={()=>{dispatch(getDetail({id, title, subtitle, thumbnail, bookInfo, authors}))}}>Learn More</Button>
                    </Link>
                    <Link to={`/favorite`}>
                        <Button size="small" onClick={()=>{dispatch(getBookFavorite({id, title, subtitle, thumbnail, bookInfo, authors}))}}>Add to Favorite</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    )
}

export default BookItem;
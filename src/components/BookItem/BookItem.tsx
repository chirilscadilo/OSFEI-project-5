import React from "react";
import { Book } from "../../models/booksInterface";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {Link} from 'react-router-dom';
import { useAppDispatch } from "../../hooks/reduxHooks";
import { getBookFavorite } from "../../state/favoriteSlice";
import { useAppSelector } from "../../hooks/reduxHooks";
import { removeBookFavorite } from "../../state/favoriteSlice";
import { IconButton } from "@mui/material";

interface BookItemProps{
    book: Book;
}

const BookItem:React.FC<BookItemProps>= ({book}) =>{
    const dispatch = useAppDispatch();
    const favoriteBooks = useAppSelector(state=>state.favorite); 

    
    const existingFavoriteBook = favoriteBooks.bookFavorite.find((item)=>(item.id === book.id));

    return (
        <Box sx={{display:'inline-block', margin: 2}}>
            <Card sx={{ width: 345 , height: 550}}>
                <CardMedia
                sx={{maxWidth:138, height: 192, alignItems: 'center',marginTop:2, marginLeft: 'auto', marginRight: 'auto'}}
                image={book?.volumeInfo?.imageLinks?.thumbnail}
                component='img'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <div dangerouslySetInnerHTML={{
                            __html:book?.volumeInfo?.title.length > 26 ? book?.volumeInfo?.title.substring(0,26).concat('...'): book?.volumeInfo?.title
                        }}/>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        <div dangerouslySetInnerHTML={{
                            __html:book?.searchInfo?.textSnippet.substring(0,150)
                        }}/>
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
                        Authors: {book?.volumeInfo?.authors ? book?.volumeInfo?.authors[0] : 'Unknown'} 
                    </Typography>
                </CardContent>

                <CardActions sx={{display:'flex', justifyContent:'space-evenly'}}>
                    <Link to={`/book/${book.id}`}>
                        <Button size="small" >Learn More</Button>
                    </Link>
                    
                    { existingFavoriteBook?
                        <IconButton size="small" onClick={()=>{dispatch(removeBookFavorite({id:book.id}))}}>
                            <StarIcon sx={{color:'#f2a92c'}}/>
                        </IconButton>
                        :
                        <IconButton size="small" onClick={()=>{dispatch(getBookFavorite(book!))}} sx={{color:'#ed6d76'}}>
                            <StarBorderIcon sx={{color:'#f2a92c'}}/>
                        </IconButton>
                    }
                </CardActions>
            </Card>
        </Box>
    )
}

export default BookItem;
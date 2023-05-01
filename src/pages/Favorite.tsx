import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from "@mui/material";
import { removeBookFavorite } from "../state/favoriteSlice";
import { useAppSelector } from '../hooks/reduxHooks';
import { useAppDispatch } from "../hooks/reduxHooks";

const Favorite=()=>{
    const dispatch = useAppDispatch();
    let favoriteBooks = useAppSelector(state=>state.favorite); 

    if(favoriteBooks.bookFavorite.length === 0){
        return (
        <Typography gutterBottom variant="h5" component="div"
        sx={{width: '100%', textAlign: 'center', marginTop: 2}}>
            No Favorite Books
        </Typography>
        )
    }
    return( 
        <>
            {favoriteBooks.bookFavorite.map((book)=>(
                <Box sx={{display:'inline-block', margin: 2}} key={book.id}>
                    <Card sx={{ maxWidth: 345 , height: 550}}>
                        <CardMedia
                        sx={{maxWidth:138, height: 192, alignItems: 'center', marginTop:2, marginLeft:'auto', marginRight:'auto'}}
                        image={book.thumbnail}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {book.title}
                            </Typography>
                            <Typography gutterBottom>
                                {book.subtitle}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {book.bookInfo}
                            </Typography>
                            {book.authors ?
                            <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
                                Authors: {book.authors[0]}
                                {book.authors.slice(1,book.authors.length).map((autor)=>(',' + ' ' + autor))}
                            </Typography>
                            : <Typography></Typography>
                            }
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={()=>{dispatch(removeBookFavorite({id:book.id}))}}>
                                Remove from Favorite
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    )
}

export default Favorite
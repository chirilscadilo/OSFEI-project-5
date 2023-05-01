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
    return( 
        <>
            {favoriteBooks.bookFavorite.map((book)=>(
                <Box sx={{display:'inline-block', margin: 2}} key={book.id}>
                    <Card sx={{ maxWidth: 345 , minHeight: 500}}>
                        <CardMedia
                        sx={{ height: 140 }}
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
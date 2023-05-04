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
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Favorite=()=>{
    const navigate = useNavigate();
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
            <Box>
                <Button size='medium' onClick={() => navigate(-1)}>Go Back</Button>
            </Box>
            {favoriteBooks.bookFavorite.map((book)=>(
                <Box sx={{display:'inline-block', margin: 2}} key={book.id}>
                    <Card sx={{ width: 345 , height: 550}}>
                        <CardMedia
                        sx={{maxWidth:138, height: 192, alignItems: 'center', marginTop:2, marginLeft:'auto', marginRight:'auto'}}
                        image={book?.volumeInfo?.imageLinks?.thumbnail}
                        />
                        <CardContent sx={{textAlign:'center'}}>
                            <Typography gutterBottom variant="h5" component="div">
                                {book?.volumeInfo?.title}
                            </Typography>
                            <Typography gutterBottom>
                                {book?.volumeInfo?.subtitle}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {book?.searchInfo?.textSnippet || book?.volumeInfo?.description?.substring(0, book?.volumeInfo?.description?.indexOf('.'))}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
                                Authors: {book?.volumeInfo?.authors?.map((author, index)=>(index===0? author :','+ ' ' + author)) || 'Unknown'} 
                            </Typography>
                        </CardContent>
                        <CardActions sx={{display:'flex', justifyContent:'space-evenly'}}>
                            <Link to={`/book/${book.id}`}>
                                <Button size="small" >Learn More</Button>
                            </Link>
                            <Button size="small" onClick={()=>{dispatch(removeBookFavorite({id:book.id}))}} sx={{color:'#ed6d76'}}>
                                Remove from Favorites
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    )
}

export default Favorite
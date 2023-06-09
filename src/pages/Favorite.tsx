import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton/IconButton';
import StarIcon from '@mui/icons-material/Star';
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
                <Button size='medium' onClick={() => navigate(-1)} sx={{marginTop:2}}>Go Back</Button>
                <Typography component='h1' variant='h4' sx={{textAlign:'center'}}>Favorite List:</Typography>
            </Box>
            
            {favoriteBooks.bookFavorite.map((book)=>(
                <Box sx={{display:'inline-block', margin: 2}} key={book.id}>
                    
                    <Card sx={{ width: 345 , height: 550}}>
                        <CardMedia
                        sx={{maxWidth:138, height: 192, alignItems: 'center', marginTop:2, marginLeft:'auto', marginRight:'auto'}}
                        image={book?.volumeInfo?.imageLinks?.thumbnail}
                        component='img'
                        />
                        <CardContent sx={{textAlign:'center'}}>
                            <Typography gutterBottom variant="h5" component="div">
                                <div dangerouslySetInnerHTML={{
                                __html:book?.volumeInfo?.title.length > 26 ? book?.volumeInfo?.title.substring(0,26).concat('...'): book?.volumeInfo?.title
                                }}/>
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="div">
                                <div dangerouslySetInnerHTML={{
                                __html:book?.searchInfo?.textSnippet || book?.volumeInfo?.description?.substring(0,150)
                                }}/>
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{fontWeight:'bold'}}>
                                Authors: {book?.volumeInfo?.authors ? book?.volumeInfo?.authors[0] : 'Unknown'}  
                            </Typography>
                        </CardContent>
                        <CardActions sx={{display:'flex', justifyContent:'space-evenly'}}>
                            <Link to={`/book/${book.id}`}>
                                <Button size="small" >Learn More</Button>
                            </Link>
                            <IconButton size="small" onClick={()=>{dispatch(removeBookFavorite({id:book.id}))}} sx={{color:'#ed6d76'}}>
                                <StarIcon sx={{color:'#f2a92c'}}/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    )
}

export default Favorite
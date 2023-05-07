import BookItem from "../components/BookItem/BookItem";
import { useGetBooksQuery } from "../api/getBooks-slice"
import Box from '@mui/material/Box';
import { SearchBar } from "../components/SearchBar/SearchBar";
import { useAppSelector } from "../hooks/reduxHooks";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography/Typography";

export function Store(){
    const value = useAppSelector(state=>state.search.value);
    const {data:books, isLoading, isError} = useGetBooksQuery(value? value: '');

    if(isLoading){
        return(
        <Typography sx={{fontSize: 20, textAlign:'center'}}>Loading...</Typography>)
    };

    if(isError){
        return(
        <>
        <Link to='/'>
            <Button>Go Back</Button>
        </Link>
        <Typography sx={{fontSize: 20, textAlign:'center', color: 'red'}}>Something went wrong</Typography>
        </>
    )};
    
    return (
        <>
        <SearchBar/>
        <Box sx={{textAlign: 'center'}}>
            {books?.items.map(book=>(
                <BookItem key={book.id} book={book}></BookItem>
            ))}
        </Box>
        </>
    )
}
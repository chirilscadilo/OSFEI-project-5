import BookItem from "../components/BookItem/BookItem";
import { useGetBooksQuery } from "../api/getBooks-slice"
import Box from '@mui/material/Box';
import { SearchBar } from "../components/SearchBar/SearchBar";
import { useAppSelector } from "../hooks/reduxHooks";

export function Store(){
    const value = useAppSelector(state=>state.search.value);
    const {data:books} = useGetBooksQuery(value? value: '');
    return (
        <>
        <SearchBar/>
        <Box>
            {books?.items.map(book=>(
                <BookItem key={book.id} book={book}></BookItem>
            ))}
        </Box>
        </>
    )
}
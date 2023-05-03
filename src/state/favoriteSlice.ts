import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../models/booksInterface";

interface RemoveBookDetail{
    id:string;
};

interface BookFavorite{
    bookFavorite: Book[]
};

const initialState: BookFavorite = {
    bookFavorite: [],
};

export const favoriteSlice = createSlice({
    name: 'favoriteBooks',
    initialState,
    reducers:{
        getBookFavorite(state,action:PayloadAction<Book>){
            //checking for existing items
            const existingBookIndex = state.bookFavorite.findIndex(item=>item.id === action.payload.id);
            const existingBook = state.bookFavorite[existingBookIndex];

            let updatedBookItems;
            if(existingBook){
                const updatedBook = {...existingBook};
                updatedBookItems = [...state.bookFavorite];
                updatedBookItems[existingBookIndex] = updatedBook;
            }else{
                state.bookFavorite.push(
                    {...action.payload}
                )
            }
        },
        removeBookFavorite(state,action:PayloadAction<RemoveBookDetail>){
            state.bookFavorite = state.bookFavorite.filter(item=>item.id !== action.payload.id)
        },
    },
});

export const {getBookFavorite, removeBookFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookDetail } from "../models/bookDetailInterface";

interface RemoveBookDetail{
    id:string;
};

interface BookFavorite{
    bookFavorite: BookDetail[]
};

const initialState: BookFavorite = {
    bookFavorite: [],
};

export const favoriteSlice = createSlice({
    name: 'favoriteBooks',
    initialState,
    reducers:{
        getBookFavorite(state,action:PayloadAction<BookDetail>){
            //checking for existing items
            const existingBookIndex = state.bookFavorite.findIndex(item=>item.id === action.payload.id);
            const existingBook = state.bookFavorite[existingBookIndex];

            let updatedBookItems;
            if(existingBook){
                const updatedBook = {...existingBook}
                updatedBookItems = [...state.bookFavorite]
                updatedBookItems[existingBookIndex] = updatedBook
            }else{
                state.bookFavorite.push({
                    id: action.payload.id,
                    title:action.payload.title,
                    subtitle: action.payload.subtitle,
                    thumbnail: action.payload.thumbnail,
                    bookInfo: action.payload.bookInfo
                })
            }
        },
        removeBookFavorite(state,action:PayloadAction<RemoveBookDetail>){
            state.bookFavorite = state.bookFavorite.filter(item=>item.id !== action.payload.id)
        },
    },
});

export const {getBookFavorite, removeBookFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
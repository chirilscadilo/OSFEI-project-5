import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookDetail } from "../models/bookDetailInterface";

const initialState : BookDetail = {
    id: '',
    title:'',
    subtitle:'',
    thumbnail:'',
    bookInfo:'',
}

export const bookDetailSlice = createSlice({
    name: 'bookDetail',
    initialState,
    reducers:{
        getDetail(state,action:PayloadAction<BookDetail>){
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.subtitle = action.payload.subtitle;
            state.thumbnail = action.payload.thumbnail;
            state.bookInfo = action.payload.bookInfo;
        }
    }
})

export const {getDetail} = bookDetailSlice.actions;
export default bookDetailSlice.reducer;
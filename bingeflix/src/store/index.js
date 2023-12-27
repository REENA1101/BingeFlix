import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const initialState = {
    movies: [],
    genresLoaded: false,
    genres:[], 
};

const BingeflixSlice = createSlice({
    name: "NetFlix",
    initialState,
    extraReducers:(builder)=>{},
});

export const store = configureStore({
     reducer: {
        bingeflix: BingeflixSlice.reducer,
     },
})
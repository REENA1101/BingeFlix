import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {API_KEY, TMDB_BASE_URL } from '../utils/constants'
import axios from "axios";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres:[], 
};

export const getGenres = createAsyncThunk("netflix/genres", async()=>{
    const {
        data:{genres},
    } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    return genres;
});

const createArrayFromRawData = (array, movieArray, genres)=>{
    array.forEach(()=>{
        const movieGenres = [];
        movie.genre_id
    })
}

const getRawData = (api,genres, paging )=>{
    const movieArray = [];
    for(let i=1; movieArray.length<60 && i<10; i++){
       const {data:results} = await axios.get(`${api}${paging?`&page=${i}`:""}`
          createArrayFromRawData(results, moviesArray, genres);
       );
       return movieArray;
    }
};

export const fetchMovies = createAsyncThunk("netflix/trending", async({type}, thunkApi)=>{
    const {
        bingefleix:{genres},
    } =thunkApi.getState();
     return getRawData(
        `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
        genres,
        true)
}
);

// return getRawData(`${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=&{genre}`)

const BingeflixSlice = createSlice({
    name: "NetFlix",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getGenres.fulfilled,(state,action)=>{
        state.genres= action.payload;
        state.genresLoaded = true;
    })
    },
});

export const store = configureStore({
     reducer: {
        bingeflix: BingeflixSlice.reducer,
     },
})
import { configureStore } from "@reduxjs/toolkit";
import { movieReducer, addMovie, removeMovie  } from "./Slice/MovieSlice";
import { songReducer, addSong, removeSong } from "./Slice/SongSlice";
import { reset } from "./action";

 const store = configureStore({
    reducer: {
        songs: songReducer,
        movies: movieReducer
    }
 });


 export { store, reset, addSong, removeSong, addMovie, removeMovie };
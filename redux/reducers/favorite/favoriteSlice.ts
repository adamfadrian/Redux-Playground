import Movie from "@/utils/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReducerPayload } from "../../type/ReducerPayload";

interface StateType {
  movie: Movie[];
}

const initialState: StateType = {
  movie: [],
};

const favoriteSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    addMovieToFav: (state, { payload }: ReducerPayload<Movie>) => {
        const isMovieInFavorite = state.movie.some((i) => i.id === payload.id)
        if (!isMovieInFavorite){
            state.movie.push({ ...payload });
            console.log("payload", payload);
        } else {
            alert('Movie already in favorites')
        }
    },
    removeFavList: (state, { payload }: ReducerPayload<Movie | any>) => {
      state.movie = state.movie.filter((item) => {
        return item.id !== payload.id;
      });
      console.log("delete", payload);
    },
  },
});

const reducer = {
  state: favoriteSlice.reducer,
};

export const { addMovieToFav, removeFavList } = favoriteSlice.actions;
export default reducer;

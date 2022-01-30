import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ImageState {
  disliked: string[];
  liked: string[];
}

export const IMAGES_INITIAL_STATE: ImageState = {
  disliked: [],
  liked: [],
};

export const { actions: imageActions, reducer: imageReducer } = createSlice({
  name: 'image',
  initialState: IMAGES_INITIAL_STATE,
  reducers: {
    updateLiked: (state, action: PayloadAction<string[]>) => {
      state.liked = action.payload;
    },
  },
});

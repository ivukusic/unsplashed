import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ImageType } from '@common/types';

export interface ImageState {
  active: ImageType | null;
  disliked: ImageType[];
  liked: ImageType[];
}

export const IMAGES_INITIAL_STATE: ImageState = {
  active: null,
  disliked: [],
  liked: [],
};

export const { actions: imageActions, reducer: imageReducer } = createSlice({
  name: 'image',
  initialState: IMAGES_INITIAL_STATE,
  reducers: {
    updateActiveImage: (state, action: PayloadAction<ImageType>) => ({
      ...state,
      active: action.payload,
    }),

    updateLiked: (state, action: PayloadAction<ImageType[]>) => ({
      ...state,
      active: null,
      liked: action.payload,
    }),
    updateDisliked: (state, action: PayloadAction<ImageType[]>) => ({
      ...state,
      active: null,
      disliked: action.payload,
    }),
  },
});

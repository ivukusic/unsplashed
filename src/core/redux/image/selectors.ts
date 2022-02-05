import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

export const selectImageReducer = ({ image }: RootState) => image;

export const selectActiveImage = createSelector(selectImageReducer, ({ active }) => active);
export const selectLikedImages = createSelector(selectImageReducer, ({ liked }) => liked);
export const selectDislikedImages = createSelector(selectImageReducer, ({ disliked }) => disliked);

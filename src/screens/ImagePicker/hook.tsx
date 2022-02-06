import { useMemo } from 'react';

import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { API_ROUTES } from '@common/constants';
import axiosInstance from '@core/axios';
import { imageActions } from '@core/redux/image';
import {
  selectDislikedImages,
  selectActiveImage,
  selectLikedImages,
} from '@core/redux/image/Image.selectors';

import { UseHookReturnType } from './types';

export const useHook = (): UseHookReturnType => {
  const dispatch = useDispatch();

  const active = useSelector(selectActiveImage);
  const disliked = useSelector(selectDislikedImages);
  const liked = useSelector(selectLikedImages);

  const imageIds = useMemo(() => {
    return [...liked.map(item => item.id), ...disliked.map(item => item.id)];
  }, [disliked, liked]);

  const { isLoading, refetch } = useQuery('random', () => axiosInstance.get(API_ROUTES.random), {
    enabled: false,
  });

  const fetchImage = async (force = false) => {
    if (!active || force) {
      try {
        const { data } = await refetch();
        if (data?.data) {
          // FETCH ANOTHER IMAGE BECAUSE CURRENT ALREADY FETCHED
          if (imageIds.includes(data?.data.id)) {
            fetchImage();
          } else {
            dispatch(imageActions.updateActiveImage(data.data));
          }
        }
      } catch (e) {}
    }
  };

  const onImageConfirm = (confirmed: boolean) => {
    if (active) {
      if (confirmed) {
        dispatch(imageActions.updateLiked([...liked, active]));
      } else {
        dispatch(imageActions.updateDisliked([...disliked, active]));
        fetchImage(true);
      }
    }
  };

  return { active, disliked, fetchImage, isLoading, liked, onImageConfirm };
};

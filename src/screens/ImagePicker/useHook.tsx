import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { API_ROUTES } from '@common/constants';
import axiosInstance from '@core/axios';
import { imageActions } from '@core/redux/image';
import {
  selectDislikedImages,
  selectActiveImage,
  selectLikedImages,
} from '@core/redux/image/selectors';

export const useHook = () => {
  const dispatch = useDispatch();

  const disliked = useSelector(selectDislikedImages);
  const active = useSelector(selectActiveImage);
  const liked = useSelector(selectLikedImages);

  const { isLoading, refetch } = useQuery('random', () => axiosInstance.get(API_ROUTES.random), {
    enabled: false,
  });

  const fetchImage = async (force = false) => {
    if (!active || force) {
      try {
        const { data } = await refetch();
        if (data) {
          dispatch(imageActions.updateActiveImage(data.data));
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

  return { active, fetchImage, isLoading, liked, onImageConfirm };
};

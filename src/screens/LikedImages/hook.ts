import { useDispatch, useSelector } from 'react-redux';

import { imageActions } from '@core/redux/image';
import { selectLikedImages } from '@core/redux/image/selectors';

import { UseHookReturnType } from './types';

export const useHook = (): UseHookReturnType => {
  const dispatch = useDispatch();

  const liked = useSelector(selectLikedImages);
  const disliked = useSelector(selectLikedImages);

  const removeLikedImage = image => {
    dispatch(imageActions.updateLiked(liked.filter(item => item.id !== image.id)));
    dispatch(imageActions.updateDisliked([...disliked, image]));
  };

  return { liked, removeLikedImage };
};

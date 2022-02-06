import { useSelector } from 'react-redux';

import { cleanup, renderHook } from '@common/testUtils/react-hooks';

import { dummyImage } from './__mock__';
import { selectActiveImage, selectImageReducer, selectLikedImages } from './Image.selectors';

const initialState = {
  image: { active: dummyImage, liked: [dummyImage], disliked: [dummyImage] },
};

afterEach(cleanup);

describe('Image Selectors', () => {
  it('should return Image Reducer', () => {
    const { result } = renderHook(() => useSelector(selectImageReducer), {
      initialState,
    });
    expect(result.current).toMatchObject(initialState.image);
  });

  it('should return active image', () => {
    const { result } = renderHook(() => useSelector(selectActiveImage), { initialState });
    const { active } = initialState.image;
    expect(result.current).toMatchObject(active);
  });

  it('should return liked images', () => {
    const { result } = renderHook(() => useSelector(selectLikedImages), { initialState });
    const { liked } = initialState.image;
    expect(result.current).toMatchObject(liked);
  });

  it('should return disliked images', () => {
    const { result } = renderHook(() => useSelector(selectLikedImages), { initialState });
    const { disliked } = initialState.image;
    expect(result.current).toMatchObject(disliked);
  });
});

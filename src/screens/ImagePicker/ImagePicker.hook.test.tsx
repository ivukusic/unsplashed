import { waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import { API_ROUTES } from '@common/constants';
import { act, renderHook } from '@common/testUtils/react-hooks';
import axiosInstance from '@core/axios';
import { dummyImage } from '@core/redux/image/__mock__';

import { useHook } from './hook';

const mock = new MockAdapter(axiosInstance);
mock.onGet(API_ROUTES.random).reply(200, dummyImage);

const initialState = {
  image: { active: null, liked: [], disliked: [] },
};

describe('ActiveCard hook', () => {
  it('should be able to update "active" when fetching image', async () => {
    const { result } = renderHook(() => useHook(), { initialState });

    expect(result.current.active).toBe(null);
    act(() => {
      result.current.fetchImage();
    });

    await waitFor(() => {
      expect(result.current.active).toEqual(dummyImage);
    });
  });

  it('should be able to add "active" image to liked', async () => {
    const { result } = renderHook(() => useHook(), {
      initialState: { image: { ...initialState.image, active: dummyImage } },
    });
    act(() => {
      result.current.onImageConfirm(true);
    });
    await waitFor(() => {
      expect(result.current.liked).toEqual([dummyImage]);
      expect(result.current.disliked).toEqual([]);
    });
  });

  it('should be able to add "active" image to disliked', async () => {
    const { result } = renderHook(() => useHook(), {
      initialState: { image: { ...initialState.image, active: dummyImage } },
    });
    act(() => {
      result.current.onImageConfirm(false);
    });

    await waitFor(() => {
      expect(result.current.liked).toEqual([]);
      expect(result.current.disliked).toEqual([dummyImage]);
    });
  });
});

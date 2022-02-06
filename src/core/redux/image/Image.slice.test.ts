import { dummyImage } from './__mock__';
import { IMAGES_INITIAL_STATE, imageActions, imageReducer } from './index';

describe('Image Reducer', () => {
  describe('Slice', () => {
    it('should return the initial state', () => {
      expect(imageReducer(undefined, { type: '' })).toMatchObject(IMAGES_INITIAL_STATE);
    });

    describe('Actions', () => {
      it('should create an action to handle updateActiveImage', () => {
        const expectedAction = {
          type: 'image/updateActiveImage',
          payload: dummyImage,
        };
        expect(imageActions.updateActiveImage(dummyImage)).toEqual(expectedAction);
      });
    });

    it('should create an action to handle updateLiked', () => {
      const expectedAction = {
        type: 'image/updateLiked',
        payload: [dummyImage],
      };
      expect(imageActions.updateLiked([dummyImage])).toEqual(expectedAction);
    });

    it('should create an action to handle updateDisliked', () => {
      const expectedAction = {
        type: 'image/updateDisliked',
        payload: [dummyImage],
      };
      expect(imageActions.updateDisliked([dummyImage])).toEqual(expectedAction);
    });
  });
});

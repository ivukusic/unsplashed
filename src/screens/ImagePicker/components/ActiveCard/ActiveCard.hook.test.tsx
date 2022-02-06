import { act, renderHook } from '@common/testUtils/react-hooks';

import { useHook } from './hook';

const URI_VALUE = 'https://some.url.com/sfs';

describe('ActiveCard hook', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('should be able to update "current" from undefined to value', () => {
    const { result, rerender } = renderHook(props => useHook(props), {
      initialProps: { uri: undefined },
    });
    expect(result.current.current).toBe(undefined);
    act(() => {
      rerender({ uri: URI_VALUE });
    });
    expect(result.current.current).toBe(URI_VALUE);
  });

  it('should be able to update "current" from value to undefined', () => {
    const { result, rerender } = renderHook(props => useHook(props), {
      initialProps: { uri: URI_VALUE },
    });
    expect(result.current.current).toBe(URI_VALUE);
    act(() => {
      rerender({ uri: undefined });
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.current).toBe(undefined);
  });
});

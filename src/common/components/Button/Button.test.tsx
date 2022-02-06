import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import { Button } from './index';

describe('<Button /> behaves correctly', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render correctly', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<Button label="Submit" onPress={mockFn} testID="btn" />);
    const component = getByTestId('btn');
    expect(component).not.toBeNull();
  });

  it('should be able to press the button', () => {
    const mockFn = jest.fn();

    const { getByTestId } = render(<Button label="Submit" onPress={mockFn} testID="btn" />);
    const component = getByTestId('btn');
    fireEvent.press(component);

    expect(mockFn).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

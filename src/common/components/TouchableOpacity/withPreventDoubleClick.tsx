/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import React from 'react';

import debounce from 'lodash.debounce';

export const withPreventDoubleClick = (WrappedComponent: any, delay: number = 300): any => {
  const PreventDoubleClick = (props: any) => {
    const debouncedOnPress = (e: any): void => {
      props.onPress && props.onPress(e);
    };

    const onPress = debounce(debouncedOnPress, props.debounce || delay);

    return <WrappedComponent {...props} onPress={onPress} />;
  };

  return PreventDoubleClick;
};

export default withPreventDoubleClick;

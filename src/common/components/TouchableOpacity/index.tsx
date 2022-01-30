import React from 'react';
import { TouchableOpacity } from 'react-native';

import debounce from 'lodash/debounce';

import { TouchableProps } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withPreventDoubleClick = (WrappedComponent: any): any => {
  class PreventDoubleClick extends React.PureComponent<TouchableProps> {
    static defaultProps = {
      activeOpacity: 0.9,
      debounce: 300,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    debouncedOnPress = (e: any): void => {
      this.props.onPress && this.props.onPress(e);
    };

    onPress = debounce(this.debouncedOnPress, this.props.debounce, {
      leading: true,
      trailing: false,
    });

    render(): JSX.Element {
      return (
        <WrappedComponent
          {...this.props}
          activeOpacity={this.props.activeOpacity}
          onPress={this.onPress}
        />
      );
    }
  }

  return PreventDoubleClick;
};

export { TouchableOpacity };

export default withPreventDoubleClick(TouchableOpacity);

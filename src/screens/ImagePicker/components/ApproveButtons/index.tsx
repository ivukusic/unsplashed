import React, { useState } from 'react';

import { Button, Container, CustomText } from '@common/components';

import { Plus } from './styles';
import { Props } from './types';

export const ApproveButton: React.FC<Props> = ({ active, onImageConfirm }) => {
  const [visible, setVisible] = useState(false);

  const handleConfirmImage = (value: boolean) => () => {
    onImageConfirm(value);
    setVisible(!value);
  };

  return (
    <Container flexDirection="row" alignItems="center">
      {active || visible ? (
        <>
          <Button
            containerProps={{ flex: 1, mr: '5px' }}
            icon="times"
            onPress={handleConfirmImage(false)}
          />
          <Button
            containerProps={{ flex: 1, ml: '5px' }}
            icon="check"
            type="primary"
            onPress={handleConfirmImage(true)}
          />
        </>
      ) : (
        <CustomText flex={1} textAlign="center">
          Click on the <Plus /> in order to get image recommendations
        </CustomText>
      )}
    </Container>
  );
};

export default ApproveButton;

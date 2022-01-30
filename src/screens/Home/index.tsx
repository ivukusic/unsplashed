import React from 'react';

import { Button, Container, Screen } from '@common/components';

export const Home = (): JSX.Element => {
  const onPress = (confirmed: boolean) => (): void => {
    console.log('PRESS', confirmed);
  };

  return (
    <Screen mode="view" alignItems="stretch">
      <Container flex={1} backgroundColor="#dadada" mb="20px" />
      <Container flexDirection="row">
        <Button containerProps={{ flex: 1, mr: '5px' }} icon="times" onPress={onPress(false)} />
        <Button
          containerProps={{ flex: 1, ml: '5px' }}
          icon="check"
          type="primary"
          onPress={onPress(true)}
        />
      </Container>
    </Screen>
  );
};

export default Home;

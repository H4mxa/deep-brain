import React from 'react';
import type {Node} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

const App: () => Node = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
};

export default App;

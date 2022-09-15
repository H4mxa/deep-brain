import React from 'react';
import type {Node} from 'react';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';

const App: () => Node = () => {
  return (
    <>
      <RestaurantsScreen />
    </>
  );
};

export default App;

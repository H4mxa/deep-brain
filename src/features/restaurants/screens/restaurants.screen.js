import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';

import RetaurantInfoCard from '../components/restaurants-info-card.component';
import {SafeArea, SearchContainer, RestaurantListContainer} from './styles';

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RetaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;

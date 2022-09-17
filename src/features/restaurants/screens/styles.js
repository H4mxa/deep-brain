import {SafeAreaView, Text, View, StyleSheet, StatusBar} from 'react-native';

import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  // ${StatusBar.currentHeight && ` margin-top: ${StatusBar.currentHeight}px`};
`;
export const SearchContainer = styled.View`
  padding: 12px;
`;
export const RestaurantListContainer = styled.View`
  background-color: 'blue';
  flex: 1;
  padding: 8px;
`;

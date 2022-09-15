import React from 'react';
import {Text} from 'react-native';

import {Card} from 'react-native-paper';

import {styles} from './styles';

const RetaurantInfo = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://images.squarespace-cdn.com/content/v1/5804a264e4fcb5e6ae7003cc/1486548396592-Y2IIF52HNW0VRHVQZYHE/url.jpeg',
    ],
    address = '100 some random street',
    openingHours = true,
    rating = 3,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
      <Text style={styles.title}>Card content</Text>
    </Card>
  );
};

export default RetaurantInfo;

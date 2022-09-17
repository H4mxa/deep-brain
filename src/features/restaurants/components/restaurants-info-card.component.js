import React from 'react';
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Title,
  Address,
  Rating,
} from './styles';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';

const RetaurantInfoCard = ({restaurant = {}}) => {
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Title>Card content</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>100 some random street</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RetaurantInfoCard;

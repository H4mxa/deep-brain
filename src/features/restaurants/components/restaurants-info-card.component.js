import React from 'react';
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Title,
  Address,
  Section,
  Rating,
  SectionEnd,
  CloseMessage,
  LodgeIcon,
} from './styles';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {Spacer} from '../../../components/spacer/spacer.component';

const RetaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://images.squarespace-cdn.com/content/v1/5804a264e4fcb5e6ae7003cc/1486548396592-Y2IIF52HNW0VRHVQZYHE/url.jpeg',
    ],
    address = '100 some random street',
    openingHours = true,
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Title>Card content</Title>
        <Section>
          <Rating>
            {ratingArray.map((ele, idx) => (
              <SvgXml key={idx} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <CloseMessage variant="label">CLOSED TEMPORARILY</CloseMessage>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <LodgeIcon source={{uri: icon}} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>100 some random street</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RetaurantInfoCard;

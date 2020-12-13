import React from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Card,
  CardItem,
  List,
  ListItem,
  Thumbnail,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
  ListCategory,
  CardCategory,
  ShowCardCategory,
} from '../components/ListCategory';
import AntDesign from 'react-native-vector-icons/AntDesign';

class ShowDetails extends React.Component {
  constructor(props) {
    super(props);
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
  }

  render() {
    return (
      <Container style={{backgroundColor: '#ffead9'}} noheader>
        <Grid>
          <Row size={2}>
            <ImageBackground
              style={{
                width: this.width,
                height: 'auto',
              }}
              imageStyle={{borderBottomRightRadius: 30}}
              resizeMode={'stretch'}
              source={require('../assets/images/furniture.jpeg')}></ImageBackground>
          </Row>
          <Row size={7} style={{justifyContent: 'center'}}>
            <Content style={{margin: 5}}>
              <ShowCardCategory
                name="Living Room Furniture"
                imageProp={require('../assets/images/LivingRoomFurn.jpg')}
                data={{
                  count: 8,
                  price: '3,890',
                  note: 'living room furniture......',
                }}
              />
              <ShowCardCategory
                name="Dinning Room Furniture"
                imageProp={require('../assets/images/DinningRoomFurn.jpg')}
                data={{
                  count: 3,
                  price: '6,490',
                  note: 'Dinning room furniture......',
                }}
              />
              <ShowCardCategory
                name="BedRoom Furniture"
                imageProp={require('../assets/images/BedRoomFurn.jpg')}
                data={{
                  count: 14,
                  price: '4,267',
                  note: 'Bed room furniture......',
                }}
              />
              <ShowCardCategory
                name="Office Furniture"
                imageProp={require('../assets/images/OfficeFurn.jpg')}
                data={{
                  count: 7,
                  price: '5,397',
                  note: 'Office  furniture......',
                }}
              />
            </Content>
          </Row>
          <Row
            size={2}
            style={{
              backgroundColor: '#fab65c',
              borderTopLeftRadius: 50,
            }}>
            <Content
              contentContainerStyle={{
                justifyContent: 'center',
              }}
              style={{
                width: this.width * 0.9,
                alignSelf: 'center',
                marginTop: this.height * 0.03,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Button block transparent>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#fff',
                      fontSize: 20,
                    }}>
                    Add Button
                  </Text>
                </Button>
                <AntDesign name="arrowright" size={20} color={'#fff'} />
                <AntDesign name="plussquareo" size={40} color={'#fff'} />
              </View>
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'yellow',
    height: 200,
  },
};
export default ShowDetails;

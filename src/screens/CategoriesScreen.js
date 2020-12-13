import React from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
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
import {ListCategory, CardCategory} from '../components/ListCategory';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
  }

  categoryPressed = (imageProp, name, tempKey) => {
    this.props.navigation.navigate('CategoriesDetails', {tempKey: tempKey});
  };

  render() {
    console.log(this.props);
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
            <Content>
              <List>
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="Living Room Furniture"
                  tempKey="livingRoomFurn"
                  imageProp={require('../assets/images/LivingRoomFurn.jpg')}
                />
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="Dinning Room Furniture"
                  tempKey="dinningRoomFurn"
                  imageProp={require('../assets/images/DinningRoomFurn.jpg')}
                />
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="BedRoom Furniture"
                  tempKey="bedRoomFurn"
                  imageProp={require('../assets/images/BedRoomFurn.jpg')}
                />
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="Office Furniture"
                  tempKey="officeFurn"
                  imageProp={require('../assets/images/OfficeFurn.jpg')}
                />
              </List>
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
              <Button block transparent>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#fff',
                    fontSize: 20,
                  }}>
                  Choose Category
                </Text>
              </Button>
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

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {})(Categories);

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
    return (
      <Container style={{backgroundColor: '#dce9f1'}} noheader>
        <Grid>
          <Row size={3}>
            <ImageBackground
              style={{
                width: this.width,
                //  height: ,
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
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="Sofas and Armchairs"
                  tempKey="sofasAndArmchairs"
                  imageProp={require('../assets/images/OfficeFurn.jpg')}
                />
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="Tables and Chairs"
                  tempKey="tablesAndChairs"
                  imageProp={require('../assets/images/OfficeFurn.jpg')}
                />
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="Storage, Systems and Units"
                  tempKey="storageSystemUnits"
                  imageProp={require('../assets/images/OfficeFurn.jpg')}
                />
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="Sleeping area and Children Bedrooms"
                  tempKey="sleepingChildrenBedrooms"
                  imageProp={require('../assets/images/OfficeFurn.jpg')}
                />
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="Kids Furniture"
                  tempKey="kidsFurn"
                  imageProp={require('../assets/images/OfficeFurn.jpg')}
                />
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="Furniture components and hardware"
                  tempKey="furnComponentsHardware"
                  imageProp={require('../assets/images/OfficeFurn.jpg')}
                />
                <ListCategory
                  categoryPressed={this.categoryPressed}
                  name="Others"
                  tempKey="others"
                  imageProp={require('../assets/images/OfficeFurn.jpg')}
                />
              </List>
            </Content>
          </Row>
          <Row
            size={2}
            style={{
              backgroundColor: '#053654',
              borderTopLeftRadius: 50,
              // borderColor:'blue',
              // borderWidth:5,
            }}>
            <Content
              contentContainerStyle={{
                justifyContent: 'center',
              }}
              style={{
                width: this.width * 0.9,
                alignSelf: 'center',
                marginTop: this.height * 0.03,
                borderBottomWidth: 5,
                borderBottomColor: 'blue',
              }}>
              <Button block transparent>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#fff',

                    fontSize: 20,
                    borderBottomWidth: 5,
                    borderBottomColor: 'blue',
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
    backgroundColor: '053a5b',
    height: 100,
  },
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {})(Categories);

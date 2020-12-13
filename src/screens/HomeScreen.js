import React from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Container, Header, Content, Button, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
  }

  render() {
    return (
      <Container style={{backgroundColor: '#f7d3a3'}} noheader>
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
          <Row size={3} style={{justifyContent: 'center'}}>
            <View
              style={{
                padding: 20,
                backgroundColor: '#fff',
                height: this.height * 0.2,
                borderRadius: 10,
                width: this.width * 0.7,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: '#bf812e',
                  textAlign: 'center',
                }}>
                {' '}
                The Real Decor -Furnitures
              </Text>
            </View>
          </Row>
          <Row
            size={2}
            style={{backgroundColor: '#fab65c', borderTopLeftRadius: 50}}>
            <Content
              style={{width: this.width * 0.9, flex: 1, alignSelf: 'center'}}>
              <Button
                block
                rounded
                light
                onPress={() => this.props.navigation.navigate('Categories')}
                style={{margin: 10, backgroundColor: '#eee'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#d99841',
                    fontSize: 20,
                  }}>
                  Add Furniture Details
                </Text>
              </Button>
              <Button
                block
                rounded
                light
                style={{margin: 10, backgroundColor: '#eee'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#d99841',
                    fontSize: 20,
                  }}>
                  All Details
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
export default HomeScreen;

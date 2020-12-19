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
      <Container style={{backgroundColor: '#F5735F', borderColor:'#053A5B',borderTopWidth:15,borderTopLeftRadius:15 ,borderBottomEndRadius:15,borderBottomWidth:15,}} noheader>
        <Grid>
          <Row size={2}>
            <ImageBackground
              style={{
                width: 380,
                height: 350,
                marginTop:20,
                marginLeft:10,
                marginBottom:1,
                borderWidth:15,
                borderColor:'#053A5B',
              
                borderBottomRightRadius:25,
                borderTopLeftRadius:25,
              }}
              imageStyle={{borderBottomRightRadius: 30}}
              resizeMode={'stretch'}
              source={require('../assets/images/furniture1.png')}></ImageBackground>
          </Row>
          {/* <View
              style={{
                padding: 20,
                marginTop:10,
                backgroundColor: '#5B0218',
                borderWidth:5,
                borderColor:'#F0CAD4',
                height: 1,
                borderRadius: 10,
                width: this.width * 0.8,
                borderTopLeftRadius:150,
                borderBottomRightRadius:150,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}></View> */}
              {/* <View
              style={{
                padding: 20,
                backgroundColor: '#A9348C',
                marginTop:-30,
                borderWidth:5,
                borderColor:'#ECC7E3',
                height: 1,
                borderRadius: 10,
                width: this.width * 1.0,
                borderTopLeftRadius:150,
                borderBottomRightRadius:150,
               
              }}></View> */}
              {/* <View
              style={{
                padding: 20,
                backgroundColor: '#5B0218',
                marginTop:-30,
                borderWidth:5,
                height: 1,
                borderRadius: 10,
                width: this.width * 0.8,
                borderTopLeftRadius:150,
                borderBottomRightRadius:150,
                alignSelf: 'center',
                justifyContent: 'center',
                borderColor:'#F0CAD4',
                alignItems: 'center',
              }}></View> */}
          <Row size={3} style={{justifyContent: 'center'}}>
          
            <View
              style={{
                padding: 20,
                backgroundColor: '#DCE9F1',
               // borderBottomEndRadius:25,
                borderColor:'#053A5B',
                //marginTop:-100,
                //borderTopRightRadius:50,
               // borderTopLeftRadius:50,
               // borderTopWidth:15,
               // borderBottomWidth:25,
                borderWidth:10,
                height: this.height * 0.2,
               // borderRadius: 10,
                width: this.width * 0.9,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                
              }}>
              <Text
                style={{
                  fontSize: 35,
                  width:400,
                  fontWeight: 'bold',
                  color: '#bf812e',
                 textAlign: 'center',
                 fontFamily:'Times New Roman',
                 
                }}>
                {' '}
                Furnitures
                
              </Text>
              <Text
                style={{
                  fontSize: 29,
                  width:400,
                  fontWeight: 'bold',
                  color: '#bf812e',
                 textAlign: 'center',
                 fontStyle:'italic',
                 fontFamily:'Times New Roman',
                }}>
                {' '}
                
                The Decorative Asset
              </Text>

            </View>

          </Row>
          
          <Row
            size={3}
            style={{height: this.height * 0.2,marginBottom:10,backgroundColor: '#053A5B', borderBottomLeftRadius:50, borderTopRightRadius:50,borderLeftWidth:10,borderRightWidth:10,borderTopWidth:10,borderTopColor:'#023816',borderLeftColor:'white',borderRightColor:'white'}}>
            <Content
              style={{width: this.width * 1.1, flex: 1, alignSelf: 'center'}}>
              <Button
                block
               // rounded
                light
                onPress={() => this.props.navigation.navigate('Categories')}
                style={{marginTop:90,margin: 10, backgroundColor: '#eee',borderLeftWidth:15,borderRightWidth:15,borderBottomLeftRadius:50,shadowColor:'black',shadowOpacity:0.5,borderTopRightRadius:50,borderColor:'#510D1E'}}>
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
                onPress={() => this.props.navigation.navigate('ShowAll')}

               // rounded
                light
                style={{margin: 10, backgroundColor: '#eee',borderLeftWidth:15,borderRightWidth:15,borderBottomLeftRadius:50,shadowColor:'black',shadowOpacity:0.5,borderTopRightRadius:50,borderColor:'#510D1E'}}>
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

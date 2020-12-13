import React from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  FlatList,
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
import {connect} from 'react-redux';
import Swipeable from 'react-native-swipeable';
import {atnRemoveFurn} from '../redux/actions/furnActions';
import {ScrollView} from 'react-native-gesture-handler';

class CategoriesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
    this.state = {
      categoryDetails: {},
      change: false,
      rightButtonWidth: 100,
    };
  }

  rightButtons = (index) => {
    return [
      <TouchableHighlight
        onPress={() => {
          this.setState({change: !this.state.change});
          this.props.atnRemoveFurn(this.props.route.params.tempKey, index);
          this.setState({rightButtonWidth: 0});
        }}
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          Delete
        </Text>
      </TouchableHighlight>,
    ];
  };

  swipeoutBtns = [
    {
      text: 'Button',
    },
  ];

  renderItem = ({item, index}) => {
    return (
      <Swipeable
        useNativeDriver={false}
        rightActionActivationDistance={this.width * 0.9}
        rightButtonWidth={this.width * 0.25}
        onRightActionRelease={() =>
          this.props.atnRemoveFurn(this.props.route.params.tempKey, index)
        }
        rightButtons={this.rightButtons(index)}>
        <ShowCardCategory
          name={item.title}
          imageProp={{uri: item.imageUrl}}
          data={{
            count: item.count,
            price: item.price,
            note: item.note,
          }}
        />
      </Swipeable>
    );
  };

  render() {
    const {tempKey} = this.props.route.params;
    const dataArray = this.props.state[tempKey];
    console.log(tempKey, dataArray);
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
            {dataArray.length === 0 ? (
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 40,
                  height: this.height * 0.1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                  }}>
                  Nothing to show, Please Check on "+" to Add Item
                </Text>
              </View>
            ) : (
              <Content style={{margin: 5}}>
                <FlatList
                  data={dataArray}
                  renderItem={(item, index) => this.renderItem(item, index)}
                  keyExtractor={(item, index) => index}
                />
              </Content>
            )}
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
                <AntDesign
                  name="plussquareo"
                  size={40}
                  color={'#fff'}
                  onPress={() =>
                    this.props.navigation.navigate('AddDetails', {
                      tempKey: tempKey,
                    })
                  }
                />
              </View>
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    atnRemoveFurn: (tempKey, index) => dispatch(atnRemoveFurn(tempKey, index)),
  };
};

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'yellow',
    height: 200,
  },
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesDetails);

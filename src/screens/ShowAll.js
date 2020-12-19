import React from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import {ShowCardCategory} from '../components/ListCategory';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {atnRemoveFurn} from '../redux/actions/furnActions';
import {SwipeListView} from 'react-native-swipe-list-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {cleanSingle} from 'react-native-image-crop-picker';
import {ShowAllCategories} from '../components/ListCategory';

class CategoriesDetails extends React.Component {
  constructor(props) {
    super(props);
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
    this.state = {
      categoryDetails: {},
      change: false,
      rightButtonWidth: 100,
      dataArray: [],
    };
  }
  render() {
    const allKeys = Object.keys(this.props.state);
    console.log(this.props.state);
    console.log(allKeys);
    let AllItems = [];
    allKeys.map((e, idx) => {
      this.props.state[e].map((e) => AllItems.push(e));
    });
    console.log(AllItems);
    return (
      <Container style={{backgroundColor: '#3b658f'}} noheader>
        <Grid>
          <Row size={2}>
            <ImageBackground
              style={{
                width: this.width,
                height: this.height * 0.3,
              }}
              imageStyle={{borderBottomRightRadius: 30}}
              resizeMode={'stretch'}
              source={require('../assets/images/furniture.jpeg')}></ImageBackground>
          </Row>
          <Row size={4} style={{justifyContent: 'center'}}>
            {AllItems.length ? (
              <ScrollView
                style={{
                  flexDirection: 'column',
                  width: this.width,
                  alignContent: 'center',
                }}>
                {AllItems.map((e) => (
                  <ShowAllCategories data={e} />
                ))}
              </ScrollView>
            ) : (
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 40,

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
                  No Items to show
                </Text>
              </View>
            )}
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

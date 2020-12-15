import React from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Textarea,
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {atnAddFurn, atnUpdateFurn} from '../redux/actions/furnActions';
import ImagePicker from 'react-native-image-crop-picker';

class AddDetails extends React.Component {
  constructor(props) {
    super(props);
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
    this.state = {
      isEditable: false,
      title: '',
      count: '',
      price: '',
      note: '',
      imageUrl: '',
    };
  }


  componentDidMount(){
    const {tempKey,index} = this.props.route.params

    if(index !== undefined){
      const {title,count,price,note,imageUrl} = this.props.state[tempKey][index]
       this.setState({
         isEditable: true,
         title,
         count,
         price,
         note,
         imageUrl
       })
    }
  }

  

  pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        this.setState({
          imageUrl: image.path,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleOk = () => {
    let tempKey = this.props.route.params.tempKey;
    if(this.state.isEditable ){
      let index = this.props.route.params.index
     this.props.atnUpdateFurn(this.state,tempKey,index)
    }else{
      this.props.atnAddFurn(this.state, tempKey);
    }
      
    this.setState({title: '', count: '', price: '', note: '', imageUrl: ''});
    this.props.navigation.goBack();
  };

  render() {
    const {isEditable} = this.state
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
          <Row
            size={7}
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  backgroundColor: '#d99841',
                  padding: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  margin: 10,
                }}>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: 'gray',
                  }}
                  placeholder="Enter Name of Furniture"
                  onChangeText={(text) => this.setState({title: text})}
                  value={this.state.title}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#d99841',
                  padding: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  margin: 10,
                }}>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: 'gray',
                  }}
                  placeholder="Number of Item"
                  onChangeText={(text) => this.setState({count: text})}
                  value={this.state.count}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#d99841',
                  padding: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  margin: 10,
                }}>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: 'gray',
                  }}
                  placeholder="Price"
                  onChangeText={(text) => this.setState({price: text})}
                  value={this.state.price}
                />
              </View>

              <View>
                <Text style={{paddingLeft: 10, fontWeight: 'bold'}}>
                  Note:-
                </Text>
                <View
                  style={{
                    backgroundColor: '#d99841',
                    padding: 10,
                    borderRadius: 10,
                    borderWidth: 1,
                    margin: 10,
                  }}>
                  <Textarea
                    rowSpan={4}
                    placeholder="Enter here..."
                    onChangeText={(text) => this.setState({note: text})}
                    value={this.state.note}
                  />
                </View>
                <View
                  style={{
                    margin: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  {this.state.imageUrl.length === 0 ? (
                    <View
                      style={{
                        padding: 4,
                        width: this.width * 0.16,
                        borderWidth: 1,
                      }}>
                      <Ionicons
                        name="md-images-outline"
                        size={50}
                        onPress={this.pickImage}
                      />
                    </View>
                  ) : (
                    <View
                      style={{
                        padding: 0,
                        width: this.width * 0.16,
                        height: this.height * 0.1,
                        borderWidth: 1,
                      }}>
                      {this.state.imageUrl.length ? (
                        <TouchableOpacity onPress={this.pickImage} >
                        <Image
                        //   onPress={this.pickImage}
                          source={{uri: this.state.imageUrl}}
                          style={{
                            height: this.height * 0.1,
                            width: this.width * 0.16,
                          }}
                          resizeMode="stretch"
                        />
                        </TouchableOpacity>
                      ) : null}
                    </View>
                  )}
                  <View>
                    <AntDesign name="arrowleft" size={30} />
                  </View>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                      Tap to add Image
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
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
                width: this.width * 0.7,
                alignSelf: 'center',
                marginTop: this.height * 0.03,
              }}>
              <Button
                block
                rounded
                light
                onPress={this.handleOk}
                style={{margin: 10, backgroundColor: '#eee'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#d99841',
                    fontSize: 25,
                  }}>
                 {isEditable? <Text>Update</Text> : <Text>Save</Text>} 
                </Text>
              </Button>
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
    atnAddFurn: (e, tempKey) => dispatch(atnAddFurn(e, tempKey)),
    atnUpdateFurn: (data,tempKey,index) => dispatch(atnUpdateFurn(data,tempKey,index))
  };
};

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'yellow',
    height: 200,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDetails);

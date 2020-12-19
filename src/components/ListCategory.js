import {
  ListItem,
  Left,
  Right,
  Card,
  CardItem,
  Body,
  Icon,
  Text,
  Thumbnail,
} from 'native-base';
import React from 'react';
import {View, Dimensions, Image, ScrollView} from 'react-native';
import {cleanSingle} from 'react-native-image-crop-picker';

const {width, height} = Dimensions.get('window');

function ListCategory({imageProp, name, categoryPressed, tempKey}) {
  return (
    <ListItem
      thumbnail
      onPress={() => categoryPressed(imageProp, name, tempKey)}
      style={{
        backgroundColor: '#244a6b',
        margin: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomWidth: 5,
        borderBottomColor: '#fff',
      }}>
      <Left></Left>
      <Body>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
            //fontFamily:'cochin'
          }}>
          {name}
        </Text>
      </Body>
      <Right>
        <Thumbnail square source={imageProp} />
      </Right>
    </ListItem>
  );
}

function CardCategory() {
  return (
    <CardItem style={{marginBottom: 30}}>
      <Left></Left>
      <Body>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#eeb65e',
          }}>
          Living Room Furniture
        </Text>
      </Body>
      <Right>
        <Image
          source={require('../assets/images/furniture.jpeg')}
          style={{height: 50, width: 50}}
        />
      </Right>
    </CardItem>
  );
}

function ShowAllCategories({data}) {
  console.log('datafrom ', data);

  return (
    // <Text>{data.title}</Text>
    <Card
      style={{
        height: height * 0.25,
        width: width,

        overflow: 'scroll',
      }}>
      <CardItem Header style={{justifyContent: 'center'}}>
        <Image
          source={{
            uri:
              'file:///storage/emulated/0/Android/data/com.furnzure/files/Pictures/fe13156d-c15d-41cc-aaee-9251508d36b0.jpg',
          }}
        />
      </CardItem>
      <CardItem>
        <Body>
          <Image
            source={{
              uri:
                'file:///storage/emulated/0/Android/data/com.furnzure/files/Pictures/fe13156d-c15d-41cc-aaee-9251508d36b0.jpg',
            }}
          />

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: width * 0.9,
            }}>
            <Icon
              type="Octicons"
              name="primitive-dot"
              style={{color: '#d99841'}}
            />
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                {data.title}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: width * 0.9,
            }}>
            <Icon
              type="Octicons"
              name="primitive-dot"
              style={{color: '#d99841'}}
            />
            <Text>{data.count}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: width * 0.9,
            }}>
            <Icon
              type="Octicons"
              name="primitive-dot"
              style={{color: '#d99841'}}
            />
            <Text>{data.price}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: width * 0.9,
            }}>
            <Icon
              type="Octicons"
              name="primitive-dot"
              style={{color: '#d99841'}}
            />
            <Text>{data.note}</Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
}

function ShowCardCategory({name, imageProp, data, navigation, tempKey, index}) {
  return (
    <Card
      style={{
        height: height * 0.25,
        overflow: 'scroll',
      }}>
      <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
        <Icon
          name="arrowright"
          type="AntDesign"
          style={{color: '#d99841'}}
          onPress={() => navigation.navigate('AddDetails', {tempKey, index})}
        />
      </View>
      <CardItem Header style={{justifyContent: 'center'}}>
        {imageProp.uri.length ? <Thumbnail large source={imageProp} /> : null}
      </CardItem>
      <CardItem>
        <Body>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: width * 0.9,
            }}>
            <Icon
              type="Octicons"
              name="primitive-dot"
              style={{color: '#d99841'}}
            />
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: width * 0.9,
            }}>
            <Icon
              type="Octicons"
              name="primitive-dot"
              style={{color: '#d99841'}}
            />
            <Text>{data.count}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: width * 0.9,
            }}>
            <Icon
              type="Octicons"
              name="primitive-dot"
              style={{color: '#d99841'}}
            />
            <Text>{data.price}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: width * 0.9,
            }}>
            <Icon
              type="Octicons"
              name="primitive-dot"
              style={{color: '#d99841'}}
            />
            <Text>{data.note}</Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
}

export {ListCategory, CardCategory, ShowAllCategories, ShowCardCategory};

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from '../../screens/CategoriesScreen';
import AddDetails from '../../screens/AddDetails';
import CategoriesDetails from '../../screens/CategoriesDetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import ShowDetails from '../../screens/ShowDetails';
import {Provider} from 'react-redux';
import {store} from '../../redux/store/store';

export default function stackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="AddDetails" component={AddDetails} />
          <Stack.Screen
            name="CategoriesDetails"
            component={CategoriesDetails}
          />
          <Stack.Screen name="ShowDetails" component={ShowDetails} />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{headerTitleAlign: 'center'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

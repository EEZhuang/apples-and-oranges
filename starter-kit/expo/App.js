import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadingScreen from './src/screens/loading';
import Fridge from './src/screens/fridge';
import Add from './src/screens/addFoodItem';
import Details from './src/screens/foodItemDetails';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
// import Chat from './src/screens/chat';
// import Map from './src/screens/map';

import { HomeIcon, ChatIcon, MapIcon } from './src/images/svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  // showLabel: false,
  activeTintColor: '#1062FE',
  inactiveTintColor: '#000',
  style: {
    backgroundColor: '#F1F0EE',
    paddingTop: 5
  }
};

const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName='Fridge'
    tabBarOptions={tabBarOptions} >
    <Tab.Screen
      name='Fridge'
      component={Fridge}
      options={{
        tabBarIcon: ({color}) => (<HomeIcon fill={color}/>)
      }}
    />
    <Tab.Screen
      name='Add'
      component={AddStackLayout}
      options={{
        tabBarIcon: ({color}) => (<ChatIcon fill={color} />)
      }}
    />
    <Tab.Screen
      name='Details'
      component={DetailsStackLayout}
      options={{
        tabBarIcon: ({color}) => (<MapIcon fill={color} />)
      }}
    />
  </Tab.Navigator>
);

const AddStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Add food item' component={Add} />
  </Stack.Navigator>
);

const DetailsStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Locate Assistance' component={Details} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  let [fontsLoaded] = useFonts({
    'IBMPlexSans-Bold': require('./src/fonts/IBMPlex/IBMPlexSans-Bold.ttf'),
    'IBMPlexSans-Light': require('./src/fonts/IBMPlex/IBMPlexSans-Light.ttf'),
    'IBMPlexSans-Medium': require('./src/fonts/IBMPlex/IBMPlexSans-Medium.ttf'),
  });


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (<AppLoading />);
  } else {
    return (
      <NavigationContainer>
        <TabLayout/>
      </NavigationContainer>
    );
  }
};

export default App;

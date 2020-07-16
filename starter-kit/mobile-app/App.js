import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadingScreen from './src/screens/loading';
import Fridge from './src/screens/fridge';
import Add from './src/screens/addFoodItem';
import Details from './src/screens/foodItemDetails';
// import Chat from './src/screens/chat';
// import Map from './src/screens/map';

import { HomeIcon, AddIcon, ChatIcon, MapIcon } from './src/images/svg-icons';
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
        tabBarIcon: ({color}) => (<AddIcon fill={color} />)
      }}
    />
  </Tab.Navigator>
);

const AddStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Add food item'>
      {(props) => <Add {...props} navigation={props.navigation} />}
    </Stack.Screen>
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (<LoadingScreen />);
  } else {
    return (
      <NavigationContainer>
        <TabLayout/>
      </NavigationContainer>
    );
  }
};

export default App;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const NullPage = () => {
  return null;
};

const getTabBarIcon = (route, focused, color) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused ? 'book' : 'book';
  } else if (route.name === 'History') {
    iconName = focused ? 'history' : 'history';
  } else if (route.name === 'Profile') {
    iconName = focused ? 'user-o' : 'user-o';
  }

  return <Icon name={iconName} size={30} color={color} />;
};

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => getTabBarIcon(route, focused, color),
      tabBarStyle: {
        backgroundColor: '#545454',
        height: 70,
        position: 'absolute',
        padding: 10,
      },
      tabBarActiveTintColor: '#53c9c2',
      tabBarLabelStyle: {
        marginBottom: 10,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
      },
    })}
  >
    <Tab.Screen name="Home" component={NullPage} />
    <Tab.Screen name="History" component={NullPage} />
    <Tab.Screen name="Profile" component={NullPage} />
  </Tab.Navigator>
);

export default BottomTabs;

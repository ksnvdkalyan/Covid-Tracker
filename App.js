import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Worldwide from './src/components/Worldwide'
import Search from './src/components/Search'
import News from './src/components/News'
import Precautions from './src/components/Precautions'
import Info from './src/components/Info'
import SplashScreen from './src/components/Splash Screen'

const Tab = createBottomTabNavigator();

export default function App() {
  const [isTrue, setIsTrue] = useState(true)

  useEffect(() => {
    let timer = setInterval(() => {
      setIsTrue(false)
    }, 1000);

    return () => clearInterval(timer)
}, [])

  return (
      <View style={{flex: 1}}>
        {isTrue ? <SplashScreen/> : <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Worldwide') {
                iconName = focused ? 'globe-americas' : 'globe-africa';
              } else if (route.name === 'Search') {
                iconName = 'search';
              } else if (route.name === 'News') {
                iconName = 'newspaper';
              } else if (route.name === 'Precautions') {
                iconName = 'hands-wash';
              } else if (route.name === 'Info') {
                iconName = 'info-circle';
              }
  
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#40E0D0',
            inactiveTintColor: 'gray',
            labelStyle: {
              paddingBottom: 2
            },
            style: {
              height: 60
            }
          }}
        >
          <Tab.Screen name="Worldwide" component={Worldwide} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Precautions" component={Precautions} />
          <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
      </NavigationContainer>}
    </View>
  );
}

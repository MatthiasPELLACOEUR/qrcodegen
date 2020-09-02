import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Decoder from './components/Decoder'
import Encoder from './components/Encoder'
import History from './components/History'
import Ionicons from '@expo/vector-icons/Ionicons'
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true}/>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Decoder') {
                iconName = focused
                  ? 'ios-qr-scanner'
                  : 'ios-qr-scanner';
              } else if (route.name === 'Encoder') {
                iconName = focused
                  ? 'ios-barcode'
                  : 'ios-barcode';
              } else if (route.name === 'History')
                iconName = focused
                  ? 'ios-albums'
                  : 'ios-albums';
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            showLabel: false,
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name='Decoder' component={Decoder}/>
          <Tab.Screen name="Encoder" component={Encoder}/>
          <Tab.Screen name="History" component={History}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
    
  );
}

export default App
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../Screen/Home'
import ReadNews from '../Screen/ReadNews'
import { NavigationContainer } from '@react-navigation/native'

const Stack =createStackNavigator()
/**
 * Renders the HomeNavigator component.
 *
 * @return {JSX.Element} The rendered HomeNavigator component.
 */
function HomeNavigator() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}   
        options={{ headerShown: false }}/>
        <Stack.Screen name='ReadNews'component={ReadNews}   
        options={{ headerShown: false }}/>
        
      
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeNavigator

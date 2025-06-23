import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import ProdutoScreen from '../screens/ProdutoScreen'
import HomeScreen from '../screens/HomeScreen'


export default function StackRoutes() {

    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>

        <Stack.Screen 
        name='HomeScreen'
        component={HomeScreen}
        />
        <Stack.Screen 
        name='ProdutoScreen'
        component={ProdutoScreen}
        
        />




    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
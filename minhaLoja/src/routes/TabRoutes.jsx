import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons } from '@expo/vector-icons'
import PedidoScreen from '../screens/PedidoScreen'
import StackRoutes from './StackRoutes'

const Tab = createBottomTabNavigator()
export default function Tabroutes() {
  return (
  <Tab.Navigator >
    <Tab.Screen 
    name='Loja'
    component={StackRoutes}
    options={{

      tabBarIcon: ({color, size}) => (
        <Ionicons name="home-outline" color={color} size={size} />
      )
    }}
    />

    <Tab.Screen 
    name='PedidoScreen'
    component={PedidoScreen}
    options={{
      title: "Orçamento",
      tabBarIcon: ({color, size}) => (
        <Ionicons name="clipboard" color={color} size={size} />
      )
    }}
    />

    
  </Tab.Navigator>

  

  )
}

const styles = StyleSheet.create({})
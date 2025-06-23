import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider} from "react-native-paper"
import {NavigationContainer} from "@react-navigation/native"
import HomeScreen from './src/screens/HomeScreen';
import StackRoutes from './src/routes/StackRoutes';
import PedidoScreen from './src/screens/PedidoScreen';
import TabRoutes from './src/routes/TabRoutes.jsx'
import CargoFormScreen from './src/screens/cargo/form/CargoFormScreen.jsx';
export default function App() {
  return (

    <PaperProvider >
      <NavigationContainer>

        <CargoFormScreen />
      

      </NavigationContainer>
    </PaperProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

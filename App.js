import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HomeScreen from './screens/Home/HomeScreen';
import TodoScreen from './screens/Todo/TodoScreen';
import NotesScreen from './screens/Notes/NotesScreen';
import BillsScreen from './screens/Bills/BillsScreen';

const Stack = createNativeStackNavigator();

function App() {
  
 

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen 
          name="Início" 
          component={HomeScreen} 
          options={{ headerShown: false }}  
        />
        <Stack.Screen name="Tarefas" component={TodoScreen} />
        <Stack.Screen name="Notas" component={NotesScreen} />
        <Stack.Screen name="Contas" component={BillsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

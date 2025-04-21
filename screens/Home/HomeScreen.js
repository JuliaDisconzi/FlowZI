import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';
import styles from './styleHome';


function HomeScreen({ navigation }) {

  const dataAtual = new Date();
  const diaFormatado = dataAtual.toLocaleDateString('pt', {

    month: 'long',
    day: 'numeric'
  });


  return (

    <View style={styles.container}>

      <LottieView
        source={require('../../assets/stars.json')}
        autoPlay
        loop
        style={styles.background}
      />


      <Text style={styles.title2}>
        Flow<Text style={{ color: '#428CFB' }}>ZI</Text> 
      </Text>

      <Text style={styles.title}>Organizador pessoal</Text>
      <Text style={styles.diaText}>Hoje é dia {diaFormatado}</Text>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tarefas')}>
        <Icon name="tasks" size={30} color="#000" />
        <Text style={styles.buttonText}>Tarefas</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notas')}>
        <Icon name="sticky-note" size={30} color="#000" />
        <Text style={styles.buttonText}>Notas</Text>
      </TouchableOpacity>




      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contas')}>
        <Icon name="credit-card" size={30} color="#000" />
        <Text style={styles.buttonText}>Contas</Text>
      </TouchableOpacity>




    </View>
  );
}

export default HomeScreen;

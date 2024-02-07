import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStaly="dark-content" translucent={true} backgroundColor="#f1f1f1" />
      <Text style={styles.title} >Seu Roteiro</Text>
     
      <View style={styles.form}>
        <Text style={styles.label}>Cidade Destino</Text>
        <TextInput 
        placeholder='Digite a cidade' 
        style={styles.input}/>

        <Text style={styles.label}>Tempo de estadia: <Text style={styles.days}>10</Text> Dias</Text>

        <Slider 
          
          minimumValue={1}
          maximumValue={10}
          minimumTrackTintColor='#009688'
          maximumTrackTintColor='#000000'
        />

        </View>

        <Pressable style={styles.button} >
          <Text style={styles.buttonText}>Gerar roteiro</Text>
        </Pressable>

        <ScrollView style={styles.containerScrow} showsVerticalScrollIndicator={false} >
          <View style={styles.content}>
            <Text style={styles.titleTrip}>Roteiro da viagem 👇</Text>
            <Text>Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagemRoteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagemRoteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagemRoteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagemRoteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagemRoteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagem
            Roteiro Completo da viagemRoteiro Completo da viagem
            </Text>
          </View>
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    paddingTop: 30
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: 54
  },

  form: {
    backgroundColor: '#fff',
    width:'90%',
    borderRadius: 8,
    padding: 16,
    marginTop: 16
  },

  label:{
    fontWeight:'bold',
    fontSize: 18,
    marginBottom: 8
  },

  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#94a3b8',
    padding: 8,
    fontSize:16,
    marginBottom:16
  },

  days: {
    backgroundColor: '#f1f1f1'
  },

  button: {
    backgroundColor: '#ff5656',
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    padding: 14,
    justifyContent: 'center',
    marginTop: 10
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },


  content: {
    backgroundColor: '#fff',
    padding: 16,
    width: '100%',
    marginTop: 16,
    borderRadius: 8,

  },

  titleTrip: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14
  },

  containerScrow: {
    width: '90%',
    marginTop: 8
  }



  
});

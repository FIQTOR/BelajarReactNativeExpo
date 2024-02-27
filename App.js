
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [title, setTitle] = useState('')

  return (
    <View style={styles.body}>
      <ScrollView>
        {/* Shift + alt + arrow down */}
        <Text>Halo Dunia!</Text>
        <Text>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => setTitle('Halo semuanya!')}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

// Stop Server: Ctrl + c
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'lightblue',
    width: '100%'
  },
  button: {
    width: 'fit-content',
    backgroundColor: 'red',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '5px',
    paddingBottom: '5px',
    borderRadius: '5px'
  },
  buttonText: {
    color: 'white'
  }

});

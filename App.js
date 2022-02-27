import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('motasem');
  const [person, setPerson] = useState({
    name: 'noor',
    age: 22,
  });

  const clickHandler = () => {
    setName('Noor');
    setPerson({
      name: 'mohammed',
      age: 32,
    });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title='Update name' onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

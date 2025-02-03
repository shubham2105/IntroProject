import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import {Pressable, TextInput} from 'react-native-gesture-handler';

const HomeScreen = ({route}) => {
  const [userName, setUserName] = useState('');
  const [todo, setTodo] = useState('');
  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      setUserName(user.displayName || 'User');
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greetText}>Welcome {userName} </Text>
      <View>
        <TextInput
          placeholder="Enter todo"
          value={todo}
          onChangeText={setTodo}
          autoCorrect={false}
        />
        <Pressable>
          <Text>Add Todo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetText: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: '5%',
  },
});

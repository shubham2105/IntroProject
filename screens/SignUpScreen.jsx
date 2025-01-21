import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.logintxt}>Signup</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntryTextContentType="password"
          style={styles.textInput}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('SignUp')}
        style={styles.button}>
        <Text style={styles.buttontxt}>Signup</Text>
      </Pressable>
      <View flexDirection="row">
        <Text>Already a User? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'blue', fontWeight: '600'}}>Login</Text>
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
  loginContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logintxt: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: '5%',
  },
  textInputContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
  },
  textInput: {
    width: '100%',
    padding: '2%',
    borderWidth: 1,
    marginBottom: '5%',
    borderRadius: 5,
    borderColor: 'gray',
  },
  button: {
    backgroundColor: 'blue',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    borderRadius: 5,
    marginBottom: '4%',
  },
  buttontxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

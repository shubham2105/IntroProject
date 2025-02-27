import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({navigation}) => {
  // State variables to store the email and password
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Function to sign up a user with email and password
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        return user.updateProfile({displayName: name});
      })
      .then(() => auth().currentUser.reload())
      .then(() => {
        const user = auth().currentUser;
        navigation.navigate('Home', {userName: user.displayName});
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else {
          Alert.alert('Error', error.message);
        }
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.logintxt}>Signup</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.textInput}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.passwordInput}
          />
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={16}
            color="#aaa"
            onPress={toggleShowPassword}
          />
        </View>
      </View>
      <Pressable onPress={() => signUp()} style={styles.button}>
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

export default SignUpScreen;

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
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '5%',
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
  passwordInput: {
    flex: 1,
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

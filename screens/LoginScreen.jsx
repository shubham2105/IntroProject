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
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const user = response.user;
        Alert.alert('User Logged In Successfully');
        navigation.navigate('Home', {userName: user.displayName});
        console.log('response :', response);
      })
      .catch(err => {
        console.log('error :', err);
        Alert.alert('Login Failed', err.message);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.logintxt}>Login</Text>
      </View>
      <View style={styles.textInputContainer}>
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
      <Pressable onPress={() => onLogin()} style={styles.button}>
        <Text style={styles.buttontxt}>Login</Text>
      </Pressable>
      <View flexDirection="row">
        <Text>Haven't registered yet? </Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: 'blue', fontWeight: '600'}}>Signup</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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

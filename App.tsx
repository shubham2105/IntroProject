import {} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './navigation';
import 'react-native-gesture-handler';
const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Text style ={styles.introtxt}>Introduction to React Native</Text>
    // </SafeAreaView>
    <NavigationContainer>
        <AppNavigation/>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   introtxt:{
//     fontSize: 24,
//     fontWeight: 'bold',
//     backgroundColor: 'aqua',
//     padding: '2%',
//     borderRadius: 25,
//   },
// });

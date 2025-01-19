import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

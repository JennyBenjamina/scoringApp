import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const LoginPage = () => {
  return (
    <View>
      <Link href={'/register'} asChild>
        <Pressable>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginPage;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import BiometricLogin from './BiometricLogin';

const App = () => {
  return (
    <View style={styles.container}>
      <BiometricLogin />
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

export default App;

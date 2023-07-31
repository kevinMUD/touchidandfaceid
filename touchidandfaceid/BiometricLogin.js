import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import TouchID from 'react-native-touch-id';

const BiometricLogin = () => {
  const [authError, setAuthError] = useState(null);

  const handleBiometricLogin = () => {
    TouchID.authenticate('Authenticate to continue')
      .then((success) => {
        // Biometric authentication successful
        console.log('Authentication success:', success);
        setAuthError(null);
        // Here, you can navigate to the main app screen or perform any other action
      })
      .catch((error) => {
        // Biometric authentication failed
        console.log('Authentication error:', error);
        setAuthError('Biometric authentication failed. Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBiometricLogin}>
        <Text style={styles.button}>Biometric Login</Text>
      </TouchableOpacity>
      {authError && <Text style={styles.errorText}>{authError}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default BiometricLogin;

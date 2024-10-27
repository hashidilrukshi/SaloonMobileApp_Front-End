import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const navigation = useNavigation();

  const handleregister = () => {
    navigation.navigate('RegisterScreen');
  };

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateInputs = () => {
    const {phoneNumber, password} = formData;

    if (!validateEmail(phoneNumber)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }

    if (password.length < 6) {
      Alert.alert(
        'Invalid Password',
        'Password must be at least 6 characters.',
      );
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (validateInputs()) {
      navigation.replace('MainContainer');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/bg5.webp')}
      style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.logInText}>Welcome !</Text>
        <Text style={styles.logInText2}>Style Saloon</Text>
        <Text style={styles.infoText}>
          Log in to continue your beauty journey
        </Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <FontAwesome
            name={'user'}
            size={20}
            color={'#C08497'}
            style={styles.InputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor="#d3c0c0"
            onChangeText={value => handleInputChange('phoneNumber', value)}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <FontAwesome
            name={'lock'}
            size={20}
            color={'#C08497'}
            style={styles.InputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor="#d3c0c0"
            secureTextEntry
            onChangeText={value => handleInputChange('password', value)}
          />
        </View>

        <Text style={styles.forgetpassword}>Forgot password?</Text>

        <TouchableOpacity style={styles.logbutton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.dontText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={handleregister}>
          <Text style={styles.resgister}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loginBox: {
    width: '85%',
    backgroundColor: '#FFFFFFCC',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    elevation: 10,
  },
  logInText: {
    fontSize: 32,
    color: '#C21E56',
    fontWeight: 'bold',
  },
  logInText2: {
    fontSize: 32,
    color: '#C21E56',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    color: '#8D608C',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#5C374C',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
    width: '100%',
  },
  InputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: '#5C374C',
  },
  forgetpassword: {
    color: '#C08497',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  logbutton: {
    backgroundColor: '#C08497',
    paddingVertical: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dontText: {
    color: '#8D608C',
    marginTop: 10,
  },
  resgister: {
    color: '#C08497',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

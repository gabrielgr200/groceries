import { StyleSheet, Text, ScrollView, Image, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { myColors } from '../../utils/myColors';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../../../FirebaseConfig';

const Login = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = loginCredentials;


  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password).then((val) => {
      navigation.replace('Home');
    }).catch((err) => {
      Alert.alert(err.message);
    });
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Image style={styles.img} source={require('../../assets/icon.png')} />

        <View style={styles.signup}>
          <Text style={styles.title}>Loging</Text>
          <Text style={styles.subtitle}>Enter your email and password</Text>

          <Text style={styles.text}>Email</Text>

          <TextInput
            value={email}
            onChangeText={(val) => { setLoginCredentials({ ...loginCredentials, email: val }); }}
            placeholder='exemple@gmail.com'
            keyboardType='email-address'
            style={styles.input}
          />

          <Text style={styles.text}>Password</Text>

          <View style={styles.eye}>
            <TextInput
              value={password}
              onChangeText={(val) => { setLoginCredentials({ ...loginCredentials, password: val }); }}
              secureTextEntry={isVisible}
              placeholder='minimum 6 characters'
              keyboardType='ascii-capable'
              maxLength={6}
              style={styles.inputEye}
            />
            <Feather onPress={() => {
              setIsVisible(!isVisible)
            }} name={isVisible == true ? "eye-off" : "eye"} size={24} color="black" />
          </View>

          <TouchableOpacity>
            <Text numberOfLines={2} style={styles.policy}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={loginUser} style={styles.button}>
            <Text style={styles.buttonText}>Log In </Text>
          </TouchableOpacity>

          <View style={styles.link}>
            <Text style={styles.linkText}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.links}>Sing up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.secondary
  },
  content: {
    flex: 1,
    paddingTop: 30
  },
  img: {
    alignSelf: 'center'
  },
  signup: {
    paddingHorizontal: 20,
    marginTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
    marginTop: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
    marginTop: 40
  },
  input: {
    borderColor: '#e3e3e3',
    borderBottomWidth: 2,
    fontSize: 16,
    marginTop: 15
  },
  eye: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#e3e3e3',
    borderBottomWidth: 2,
  },
  inputEye: {
    flex: 0.9,
    fontSize: 16,
    marginTop: 15
  },
  policy: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginTop: 15,
    textAlign: 'right'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: myColors.primary,
    borderRadius: 20,
    marginTop: 30,
    height: 70
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    gap: 6
  },
  linkText: {
    fontSize: 16
  },
  links: {
    fontSize: 15,
    fontWeight: 'bold',
    color: myColors.primary
  }
});
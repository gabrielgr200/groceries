import { StyleSheet, Text, ScrollView, Image, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { myColors } from '../../utils/myColors';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authentication } from '../../../FirebaseConfig';

const Register = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(true);
  const [userCrendetials, setUserCrendetials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCrendetials;

  const useAccount = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        Alert.alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Image style={styles.img} source={require('../../assets/icon.png')} />

        <View style={styles.signup}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Enter your credentials to continue</Text>

          <Text style={styles.text}>Username</Text>

          <TextInput
            placeholder='enter your username'
            keyboardType='name-phone-pad'
            maxLength={10}
            style={styles.input}
          />

          <Text style={styles.text}>Email</Text>

          <TextInput
            value={email}
            onChangeText={(val) => { setUserCrendetials({ ...userCrendetials, email: val }); }}
            placeholder='exemple@gmail.com'
            keyboardType='email-address'
            style={styles.input}
          />

          <Text style={styles.text}>Password</Text>

          <View style={styles.eye}>
            <TextInput
              value={password}
              onChangeText={(val) => { setUserCrendetials({ ...userCrendetials, password: val }); }}
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

          <Text numberOfLines={2} style={styles.policy}>
            By continuing you agree to our Terms of Services
            and Privacy Policy
          </Text>

          <TouchableOpacity onPress={useAccount} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.link}>
            <Text style={styles.linkText}>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.links}>Login Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register

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
    letterSpacing: 0.7,
    lineHeight: 25,
    width: '91%',
    opacity: 0.7
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
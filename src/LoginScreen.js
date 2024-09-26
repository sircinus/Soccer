import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        KICKIN
      </Text>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.InputContainer} />
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.InputContainer} secureTextEntry />

      <TouchableOpacity>
        <Text 
          style={styles.defLogin}
          onPress={() => navigation.navigate('HomeScreen')}>Log In
        </Text>
      </TouchableOpacity>

      <Text style={styles.textOr}>Or</Text>
      
      <TouchableOpacity style={styles.fbContainer}>
        <Icon style={styles.icon} name="facebook-official" />
        <Text style={styles.fbLogin}>
          Log In With Facebook
        </Text>
      </TouchableOpacity>
      <Text style={styles.textBottom}>Don't have an account?
        <Text style={styles.textBold} onPress={() => navigation.navigate('SignUpScreen')}>
          {' '}Sign Up
        </Text>
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#313131',
  },
  title:{
    color: '#53c9c2',
    fontSize: 20,
    fontFamily: 'Montserrat-BlackItalic',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 120,
  },
  InputContainer: {
    backgroundColor: '#545454',
    borderRadius: 5,
    marginHorizontal: 15,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    color: '#fff',
  },
  defLogin: {
    alignItems: 'center',
    fontFamily: 'Montserrat-Bold',
    backgroundColor: '#53c9c2',
    textAlign: 'center',
    borderRadius: 5,
    padding: 15,
    fontSize: 20,
    margin: 15,
    marginTop: 150,
    color: '#313131',
  },
  fbLogin: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  textOr: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#fff',
  },
  icon: {
    fontSize: 30,
    verticalAlign: 'middle',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  fbContainer: {
    alignItems: 'center',
    backgroundColor: '#127bb6',
    borderRadius: 5,
    padding: 15,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textBottom: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: '#53c9c2',
    fontSize: 20,
  },
  textBold: {
    fontFamily: 'Montserrat-Bold',
  }
})

export default LoginScreen
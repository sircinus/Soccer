import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import LandingWallpaper from '../assets/LandingWallpaper.jpg'
import { useNavigation } from '@react-navigation/native'

const LandingScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={LandingWallpaper}
        style={styles.Wallpaper} />
      <View style= {styles.textContainer}>
        <Text style={styles.title}>KICKIN</Text>
        <Text style={styles.subtitle}>Let's Play</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text 
          style={styles.Login}
          onPress={() => navigation.navigate('LoginScreen')}
          >Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text 
          style={styles.SignUp}
          onPress={() => navigation.navigate('SignUpScreen')}
          >Sign Up</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313131',
    },
    Wallpaper: {
        resizeMode: 'cover',
        width: '100%',
        height: '75%',
        marginBottom: 5,
    },
    textContainer: {
        position:'absolute',
        alignItems: 'center',
        top: '45%',
        left: 0,
        right: 0,
    },
    title: {
      color: '#53c9c2',
      fontSize: 50,
      fontFamily: 'Montserrat-BlackItalic',
    },
    subtitle: {
      fontSize: 24,
      fontFamily: 'Montserrat-SemiBold',
      color: '#fff',
    },
    Login: {
      alignItems: 'center',
      fontFamily: 'Montserrat-Bold',
      backgroundColor: '#53c9c2',
      textAlign: 'center',
      borderRadius: 5,
      padding: 15,
      fontSize: 24,
      margin: 10,
      color: '#313131',
    },
    SignUp: {
      alignItems: 'center',
      fontFamily: 'Montserrat-Bold',
      backgroundColor: '#545454',
      textAlign: 'center',
      borderRadius: 5,
      padding: 15,
      fontSize: 24,
      margin: 10,
      color: '#53c9c2',
    },
    buttonContainer: {
      margin: 5
    }
})

export default LandingScreen
import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'


import { Dimensions } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { FontAwesome } from '@expo/vector-icons';


// Google Authentication

// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'





const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;





GoogleSignin.configure({
  webClientId: '1000520553015-o5j5fm6nui1ev3v9bid6qheea8d2cs70.apps.googleusercontent.com',

});


const MyCardAction = () => {



  // Somewhere in your code
  const signInn = async () => {
    try {
      console.log("signin mehode");
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      const idToken = response.data?.idToken;
      console.log(idToken);
      const googleCreadentials = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(googleCreadentials);
      if (isSuccessResponse(response)) {
        // setState({ userInfo: response.data });
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      console.log("signin mehode2m error");
      if (isErrorWithCode(error)) {
        console.log('got error', error.message);
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };



  return (
    <View style={styles.container1}>
      <View style={styles.container2}>

        <View>
          <Image style={styles.card} source={require('../assets/images/splash.png')} />
        </View>
        <MaskedView
          style={{
            flex: 1, flexDirection: 'row', height: '100%',
            marginTop: -100
          }}
          maskElement={
            <View
              style={{
                // Transparent background because mask is based off alpha channel.
                backgroundColor: 'transparent',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: 'black',
                  fontWeight: 'bold',
                }}
              >
                I Can Exploer {"\n"}
                I Can Fun
              </Text>
            </View>
          }
        >

          {/* Shows behind the mask, you can put anything here, such as an image */}
          <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
          <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
          <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
          <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />


        </MaskedView>
        <TouchableOpacity onPress={() => {
          console.log("hello tuch");
          signInn()
        }}
          style={{
            alignSelf: 'center', marginVertical: 50
          }}
        >
          <View pointerEvents='none' style={styles.button}>
            <FontAwesome.Button
              name="google"
              backgroundColor='#28282B'
              size={50}
            >
              Sign in with Google
            </FontAwesome.Button>
          </View>
        </TouchableOpacity>

      </View>


    </View>


  );
};

export default MyCardAction

const styles = StyleSheet.create({
  container1: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 8,
  },
  container2: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 8,
  },
  card: {
    marginTop: -80,
    backgroundColor: 'transparent',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
  },

  button: {

    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'blue',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',

  },
  tuchableLogin: {
    opacity: 0.2,
  }

});

function setState(arg0: { userInfo: import("@react-native-google-signin/google-signin").User; }) {
  throw new Error('Function not implemented.');
}


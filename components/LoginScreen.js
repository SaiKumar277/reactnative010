import React, { useState, useContext } from 'react';
import {StatusBar,Dimensions, Button,StyleSheet, TextInput,Text, View,ImageBackground, Image,SafeAreaView,TouchableOpacity  } from 'react-native';
import { withNavigation } from 'react-navigation';
import { AuthContext } from '../navigation/AuthProvider';
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login,fblogin,googlelogin} = useContext(AuthContext);
  return (
    <View style={styles.container}>
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
       <Image style={styles.icon} source={require('../assets/amongus.png')}/>
      <TextInput
        style={styles.tinp} 
        value={email}
        placeholder='Email'
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
      /> 
      <TextInput
        style={styles.tinp} 
        value={password}
        placeholder='Password'
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button} 
        onPress={() => login(email, password)}
        
      >
        <Text style={{color:'#ccffff',fontSize:22}}>Login</Text>
      </TouchableOpacity>
     
       
      <FontAwesome5.Button  name="google" size={22}     backgroundColor="#de4d41"  onPress={() =>googlelogin().then(() => console.log('Signed in with Google!'))}
      >
        <Text style={{fontSize:22,color:'white'}} >Log In With Google</Text>
        <View style={{height:10}}></View>
      </FontAwesome5.Button>


      <FontAwesome5.Button  name="facebook" size={22} backgroundColor="#3b5998"  onPress={() =>fblogin().then(() => console.log('Signed in with Facebook!'))}
      >
        <Text style={{fontSize:22,color:'white'}} >Log In With Facebook</Text>
      </FontAwesome5.Button>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Signpage')}
        >
       <Text style={styles.navButtonText}>New user? Join here</Text> 
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
   // justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    marginBottom: 10
  },
  navButton: {
    marginTop: 15
  },
  navButtonText: {
    fontSize: 20,
    color: '#6646ee',
    paddingBottom:30
  }, 
    tinp:{
     
      paddingBottom:'3%',
      width:width-45,
      margin: 15, 
      borderBottomWidth: 1,
      fontSize:20,
      borderColor:'#00BCD4',
      color:'#00BCD4'
},
button: {
  flexDirection: 'row', 
  height: 35, 
  width:80,
  backgroundColor: '#00BCD4',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
  elevation:3,
  marginBottom:40
},
icon:{    
  resizeMode:'contain',
  width:400,
  height:100,
  alignSelf:'center',
  paddingTop:20,
  marginVertical:'20%',
  marginBottom:80
},
googleButton:{
 
}
});
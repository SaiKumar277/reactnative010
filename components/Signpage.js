import React, { useState, useContext , useEffect}  from 'react'
import { StatusBar,StyleSheet,Dimensions,Button,KeyboardAvoidingView, TextInput,Text, View,ImageBackground, Image,SafeAreaView,TouchableOpacity, ScrollView  } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TouchableHighlight } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../navigation/AuthProvider';

export default function Signpage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register} = useContext(AuthContext);
 
 return (
          <SafeAreaView style={styles.container}>
             <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
              <Image style={styles.icon} source={require('../assets/amongus.png')}/>
              <Text style={styles.txt}>Welcome to this App! </Text>
            <KeyboardAvoidingView behavior='height'>
             <TextInput style={styles.tinp}
             value={name} 
             placeholder={'Name..'}
             onChangeText={userName => setName(userName)}/>
             <TextInput style={styles.tinp} value={email}
                placeholder='Email'
                onChangeText={userEmail => setEmail(userEmail)}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}/>
             <TextInput style={styles.tinp} value={password}
                placeholder='Password'
                onChangeText={userPassword => setPassword(userPassword)}
                secureTextEntry={true}/>
              </KeyboardAvoidingView>
              
              <TouchableOpacity
                style={styles.button} 
                onPress={() => register(name,email, password)}
                
              >
                 <Text style={{color:'#ccffff',fontSize:22}}>Sign up</Text>
                </TouchableOpacity>
              
          </SafeAreaView >
        )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
     // justifyContent: 'center',
      alignItems: 'center',
    },
    img:{
      height:"100%",
      width:"100%",
      
    },
    txt:{
      color:'#00BCD4',
      fontSize:30,
      textAlign:'center',
      paddingTop:'15%',
      paddingBottom:'10%',
      fontFamily:'serif',
      //backgroundColor: 'yellow',
      //justifyContent:'center'
    },
    icon:{
      resizeMode:'contain',
      width:400,
      height:100,
      alignSelf:'center',
      paddingTop:25,
      marginVertical:'15%',
      marginBottom:20
    
    
    },button: {
      flexDirection: 'row', 
      height: 35, 
      width:90,
      backgroundColor: '#00BCD4',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      elevation:3,
      marginBottom:40
    },
   
    tinp:{
      paddingLeft:'5%',
      paddingBottom:'3%',
      width:width-45,
      margin: 15, 
      borderBottomWidth: 1,
      fontSize:20,
      borderColor:'#00BCD4',
      color:'#00BCD4'
           
    },
    btn:{
      backgroundColor: "white",
      borderColor:'skyblue',
      borderWidth:2,
      borderRadius: 100/2,
      width:50,
      height:50,
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      right:30,
      bottom:50,

    }
  });

  
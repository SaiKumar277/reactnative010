import React, { Component,useContext } from 'react'
import { Dimensions,StyleSheet, TextInput,Text, View,ImageBackground, Image,SafeAreaView,TouchableOpacity  } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import Homescreen from '../components/Homescreen';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import Page5 from '../components/Page5';
import Page6 from '../components/Page6';
import Default from '../components/Default';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../navigation/AuthProvider';
import database from '@react-native-firebase/database';
import Template from '../components/Template';
import Templatelaptop from '../components/Templatelaptop';
import Templatewm from '../components/Templatewm';
import Templaterefri from '../components/Templaterefri';
import Templatedslr from '../components/Templatedslr';
import auth from '@react-native-firebase/auth';
const { width, height } = Dimensions.get('window');
var user = auth().currentUser;
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
  const { logout } = useContext(AuthContext);

  return (
    <DrawerContentScrollView >
      <View style={{padding:15, borderBottomColor: '#00BCD4', borderBottomWidth: 1,  width: width - 50,}}>
      <Text style={{fontSize:22,fontWeight:'bold',color:'#00BCD4',paddingBottom:30,}}>Welcome </Text>
       <Text style={{fontSize:20,fontWeight:'bold'}}>USER :</Text>
     
      <Text style={{fontSize:18,padding:10,}}>chsaikumar1227@gmail.com</Text>
      </View>
      <DrawerItem
        label="Help"
        onPress={() => props.navigation.navigate('Default')}
      />
      <DrawerItem
        label="About"
        onPress={() => props.navigation.navigate('Default')}
      />
      <DrawerItem
        label="settings"
        onPress={() => props.navigation.navigate('Default')}
      />
       <DrawerItem
        label="Logout"
        onPress={() => logout()}
      />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Homescreen} />
        <Drawer.Screen name="Page1" component={Page1} />
        <Drawer.Screen name="Page2" component={Page2} />
        <Drawer.Screen name="Page3" component={Page3} />
        <Drawer.Screen name="Page4" component={Page4} />
        <Drawer.Screen name="Page5" component={Page5} />
        <Drawer.Screen name="Page6" component={Page6} />
        <Drawer.Screen name="Default" component={Default} />
        <Drawer.Screen name="Template" component={Template} />
        <Drawer.Screen name="Templatelaptop" component={Templatelaptop} />
        <Drawer.Screen name="Templatewm" component={Templatewm} />
        <Drawer.Screen name="Templaterefri" component={Templaterefri} />
        <Drawer.Screen name="Templatedslr" component={Templatedslr} />
        
      </Drawer.Navigator>
    );
  }
  export default function HomeStack() {
    return (
      <NavigationContainer independent={true}>
        <MyDrawer />
      </NavigationContainer>
    );
  }
  
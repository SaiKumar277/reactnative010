import React, { Component,useEffect } from 'react'

import {StatusBar, Image,ListItem,Content,Button,SafeAreaView ,StyleSheet, Text, View,Dimensions, ScrollView,ImageBackground,TouchableNativeFeedback} from 'react-native'

export default function Default ({navigation }){
    
    return (
        <SafeAreaView >
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <Text style={{fontSize:22,fontWeight:'bold',color:'#00BCD4',}} >This is default page</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

bg:{
    color:'#00BCD4',
    backgroundColor:'#00BCD4',
    alignItems:'center',
    justifyContent:'center',

  },
 
});



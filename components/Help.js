import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView ,StyleSheet, Text,Dimensions, View} from 'react-native'
import { withNavigation } from 'react-navigation';
const { width, height } = Dimensions.get('window');
class Help extends Component {
    render() {
        return (
        
            <SafeAreaView style={styles.container} >
                <ImageBackground style={{width:width,height:height}}source={require('../assets/amongus.png')}>  
                    <Text  style={styles.txt}>This is Help section</Text></ImageBackground>
                <StatusBar style='dark'/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        color:'#cb3434',
        alignItems:'center',
        justifyContent:'center',
    },
    txt:{
        color:'#7a1f1f',
    }
});
export default (Help);
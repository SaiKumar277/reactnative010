import React, { Component,useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import { StatusBar,Image,ListItem,Content,Button,SafeAreaView ,StyleSheet, Text, View,Dimensions, ScrollView,ImageBackground,TouchableNativeFeedback} from 'react-native'
const { width, height } = Dimensions.get('window');
import database from '@react-native-firebase/database';
import { Ionicons } from '@expo/vector-icons';
const user = auth().currentUser; 
const thumbnails = {
    '1'  : require('../assets/mobiles/1.jpeg'),
    '2'    : require('../assets/mobiles/2.jpeg'),
    '3'    : require('../assets/mobiles/3.jpeg'),
    '4'    : require('../assets/mobiles/4.jpeg'),
    '5'    : require('../assets/mobiles/5.jpeg'),
    '6'    : require('../assets/mobiles/6.jpeg'),
    '7'    : require('../assets/mobiles/7.jpeg'),
    '8'    : require('../assets/mobiles/8.jpeg'),
    '9'    : require('../assets/mobiles/9.jpeg'),
    '10'    : require('../assets/mobiles/10.jpeg'),
    '11'    : require('../assets/mobiles/11.jpeg'),
    '12'    : require('../assets/mobiles/12.jpeg'),
    '13'    : require('../assets/mobiles/13.jpeg'),
    '14'    : require('../assets/mobiles/14.jpeg'),
    '15'    : require('../assets/mobiles/15.jpeg'),
    '16'    : require('../assets/mobiles/16.jpeg'),
    '17'    : require('../assets/mobiles/17.jpeg'),
    '18'    : require('../assets/mobiles/18.jpeg'),
    '19'    : require('../assets/mobiles/19.jpeg'),
    '20'    : require('../assets/mobiles/20.jpeg'),
    '21'    : require('../assets/mobiles/21.jpeg'),
    '22'    : require('../assets/mobiles/22.jpeg'),
    '23'    : require('../assets/mobiles/23.jpeg'),
    '24'    : require('../assets/mobiles/24.jpeg'),

  }
export default function Page1 ({navigation }){
    
    const [users, setUsers] = React.useState([]);
    useEffect(() => {
        const userRef = database().ref('/mobiles');
        const OnLoadingListener = userRef.on('value', (snapshot) => {
          setUsers([]);
          snapshot.forEach(function (childSnapshot) {
            setUsers((users) => [...users, childSnapshot.val()]);
          });
        });
        return () => {
            userRef.off('value', OnLoadingListener);
          };
    }, []);
    
       return (
            <SafeAreaView>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <View style={styles.bg}>
                 <ScrollView style={styles.container}>
                    <View >
                        {users.map((item, index) => (
                            < TouchableNativeFeedback key={index} onPress={() => {
                                navigation.navigate('Template',{
                                  param1:String(index),
                                  param2:thumbnails[index+1],
                                  param3:'mobiles'
                                });
                                }}>
                            <View key={index} 
                            style={styles.box}                             
                            >
                            <View >
                            <Image style={styles.pimg}source={thumbnails[index+1]} />
                            <Text style={styles.names} >
                                {item.A_name}                                
                            </Text>
                            <Text style={styles.sp} >
                                {item.A_sp}                                
                            </Text>
                            <Text style={styles.op} >
                                {item.A_op}                                
                            </Text>
                            <Text style={styles.dp} >
                                {item.A_dpercent}                                
                            </Text>
                            <Ionicons name="star" size={19} style={styles.star}  />
                            <Text style={styles.rat} >
                                {item.A_rating}                                
                            </Text>
                            <Image style={styles.logo} source={require('../assets/flipkartlogo.png')}/>
                            </View>
                            </View>
                            </TouchableNativeFeedback>
                        ))}
                        </View>
                 </ScrollView>
            </View>
            </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        color:'#cb3434',
        // alignItems:'center',
        // justifyContent:'center',
    },
    txt:{
        color:'#7a1f1f',
        padding:20
    },
    box:{
        alignSelf:'center',
        width:width-20,
        height:220,
        marginHorizontal:15,
        marginTop:12,
        borderRadius:30,
        borderColor:'black',
        backgroundColor:'#ccffff',
        padding:10,
        justifyContent:'flex-start',
        
        

    },
    bg:{
      paddingTop:StatusBar.currentHeight,
        alignSelf:'center',
        backgroundColor:'#00BCD4'

      },
      pimg:{
        resizeMode: "contain",
          height: 180,
          width: 350,
          position : 'absolute',
          left:-130,
          top:10
      },
      names:{
       
        position : 'absolute',
        top:10,
        left:100,
        right:20,
        fontWeight: 'bold',
        fontSize: 17,
        color:'#003333',


      },
      sp:{
        position : 'absolute',
        top:80,
        left:100,
        right:20,
        color:'#004d4d',
        fontSize: 23,
       
      },
      op:{
        position : 'absolute',
        top:110,
        left:100,
        right:20,
        color:'#004d4d',
        fontSize: 17,
        textDecorationLine: 'line-through',

      },
      dp:{
        position : 'absolute',
        top:140,
        left:100,
        right:20,
        color:'#006666',
        fontSize: 19,
      },
      star:{
        color:"#009999",
        position : 'absolute',
        top:142,
        left:190,
        right:20,

      },
      rat:{
        position : 'absolute',
        top:140,
        left:210,
        right:20,
        fontSize: 19,
      },
      logo:{
        position : 'absolute',
        bottom:-95,
        right:5,
        resizeMode: "contain",
        width:40
      },
      
    
});


//export default withNavigation(Page1);
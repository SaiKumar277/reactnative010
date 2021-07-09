import React, { Component,useEffect } from 'react'
import {StatusBar, Image,Button,SafeAreaView ,StyleSheet, Text, View,Dimensions, ScrollView,ImageBackground} from 'react-native'
import database from '@react-native-firebase/database';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { useIsFocused } from "@react-navigation/native";
const { width, height } = Dimensions.get('window');

export default function Template ({ route, navigation }){
    const [users, setUsers] = React.useState([]);
    const { param1,param2,param3} = route.params; 
    const isFocused = useIsFocused();
    useEffect(() => {
       
        console.log(param3)
        let adrs='/'+param3+'/'+String(param1)
        const userRef = database().ref(adrs);
        const OnLoadingListener = userRef.on('value', (snapshot) => {
          setUsers([]);
          snapshot.forEach(function (childSnapshot) {
            setUsers((users) => [...users, childSnapshot.val()]);
          });
        });
        
    }, [isFocused]);
    return (
        /*0-A_desc ,1-A_dpercent,2-A_name,3-A_op ,4-A_rating 
        ,5- A_sp,6-B_dpercent ,7- B_name,8-B_rating,9-B_sp*/ 
        <SafeAreaView style={{backgroundColor:'#ccffff',paddingTop:StatusBar.currentHeight}}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        <View style={styles.bg}>
             <ScrollView style={styles.container}>
                <View >
                <Image style={styles.pimg} source={param2} />
                <View
                    style={{
                        borderBottomColor: '#00BCD4', 
                        borderBottomWidth: 1, 
                        width: width - 35,
                    }}/>
                    <View style={styles.box}
                    >
                    <Text style={styles.name}>Name :</Text>
                    <Text style={styles.A_name}>{users[2]}</Text>
                    <Text style={styles.price}>Price :</Text>
                    <Text style={styles.A_sp}>{users[5]}</Text>
                    <Text style={styles.A_op}>( {users[3]} )</Text>
                    <Text style={styles.disc}>Discount :</Text>
                    <Text style={styles.A_disc}>{users[1]}</Text>
                    <Text style={styles.rat}>Rating :</Text>
                    <Text style={styles.A_rat}>{users[4]} / 5 </Text>
                    <Text style={styles.des}>Specifications :</Text>
                    <Text style={styles.A_des}>{users[0]}</Text>
                    </View>
                    <View
                    style={{
                        paddingVertical:10,
                        borderBottomColor: '#00BCD4', 
                        borderBottomWidth: 1, 
                        width: width - 35,
                    }}/>
                    <View style={styles.box1}>
                    <Text style={styles.mostsim} >Most similar product available in amazon is :</Text>
                    <Text style={styles.bname}>Name :</Text>
                    <Text style={styles.B_name}>{users[7]}</Text>
                    <Text style={styles.bsp}>Price :</Text>
                    <Text style={styles.b_sp}>{users[9]}/-</Text>
                    <Text style={styles.bdisc}>Discount :</Text>
                    <Text style={styles.b_disc}>{users[6]}</Text>
                    <Text style={styles.brat}>Rating :</Text>
                    <Text style={styles.b_rat}>{users[8]}</Text>
                    </View>
                </View>

             </ScrollView>

        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    box:{
        width:width-20,
        alignSelf:'center',
        height:395,
        marginHorizontal:10,
        padding:10,
        marginTop:12,
        paddingRight:50  ,
       
    },
    box1:{ 
        width:width-20,
        alignSelf:'center',
        height:435,
        marginHorizontal:10,
        padding:10,
        marginTop:12,
        paddingRight:50  ,
        borderBottomColor: '#00BCD4', 
        borderBottomWidth: 1, 
        width: width - 35,
    },
    contain:{
        color:'tomato',
        marginHorizontal: 20,
    } ,
    bg:{
        paddingTop:100,
        alignSelf:'center',
        backgroundColor:'#00BCD4'

      },
    container:{
        flex:1,
        color:'#cb3434',
        backgroundColor:'#ccffff',
        paddingHorizontal:10
    },
    bg:{
        paddingTop:20,
        alignSelf:'center',

      },
    txt:{
        color:'#7a1f1f',
    },
    name:{
       
         position : 'absolute',
         top:0,
         //left:0,
        // right:20,
        
        fontSize: 20,
        color:'#003333',


      }, 
      pimg:{
        resizeMode: "contain",
          height: 350,
          //width: 350,
          alignSelf:'center',
       
      },
      A_name:{
        position:'absolute',
        fontWeight: 'bold',
        fontSize: 20,
        left:70,
      },
      price:{
        position : 'absolute',
         top:80, 
        fontSize: 20,
        color:'#003333',
      },
      A_sp:{
        position:'absolute',
        fontWeight: 'bold',
        fontSize: 20,
        top:80,
        left:70,
      },
      A_op:{
        position:'absolute',
        fontSize: 16,
        top:83,
        left:145,
        textDecorationLine: 'line-through',
      },
      disc:{
        position : 'absolute',
        top:120,
        left:0,
        right:20, 
        fontSize: 20,
        color:'#003333',
      },
      A_disc:{
        position:'absolute',
        fontSize: 18,
        top:120,
        left:100,
        fontWeight: 'bold',
      },
      rat:{
        position : 'absolute',
        top:160,
        left:0,
        right:20, 
        fontSize: 20,
        color:'#003333',
      },
      A_rat:{
        position:'absolute',
        fontSize: 18,
        top:163,
        left:95,
        fontWeight: 'bold',
      },
      des:{
        position : 'absolute',
        top:195,
        left:0,
        right:20, 
        fontSize: 20,
        color:'#003333',
      },
      A_des:{
        position:'absolute',
        fontSize: 18,
        top:225,
        left:0,

      },
      mostsim:{
        position : 'absolute',
        top:10,
        left:0,
        right:20, 
        fontSize: 20,
        color:'#003333',
      },bname:{
        position : 'absolute',
        top:70,
       fontSize: 20,
       color:'#003333',
      },
      B_name:{
        position:'absolute',
        fontWeight: 'bold',
        fontSize: 19,
        left:70,
        top:70,
      },
      bsp:{
        position:'absolute',
        fontWeight: 'bold',
        fontSize: 20,
        top:190,
      },
      b_sp:{
        position:'absolute',
        fontWeight: 'bold',
        fontSize: 20,
        top:190,
        left:70
      },
      bdisc:{
        position:'absolute',
        fontWeight: 'bold',
        fontSize: 20,
        top:235,
      },
      b_disc:{
        position:'absolute',
        fontWeight: 'bold',
        fontSize: 20,
        top:235,
        left:100
      },
      brat:{
        position:'absolute',
        fontWeight: 'bold',
        fontSize: 20,
        top:280,
      },
      b_rat:{
        position:'absolute',
        fontWeight: 'bold',
        fontSize: 20,
        top:280,
        left:85
      }


});
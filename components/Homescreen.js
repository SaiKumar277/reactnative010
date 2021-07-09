
import React from 'react';
import { StatusBar,StyleSheet, Text, View,ImageBackground,ScrollView, Image,SafeAreaView ,TouchableOpacity,Button,Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationBar } from 'navigationbar-react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

class ComponentLeft extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
    return(
      <View style={{ position:'absolute',top:5,left:15}}>
        <TouchableOpacity
        onPress={() => this.props.navigation.openDrawer() }
        >
          <Ionicons name="menu" size={41} color="white" />
        </TouchableOpacity>
      </View>
    );
    }
  };
export default class Homescreen extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <SafeAreaView >
       
        <View style={styles.bg}>
        <NavigationBar 
            componentLeft    = { () =>  <ComponentLeft navigation={this.props.navigation} />  }
            statusBarStyle    = {{ barStyle: 'dark-content', backgroundColor: '#ccffff'  }}
            navigationBarStyle={{paddingTop:StatusBar.currentHeight+5,height:50,backgroundColor: '#00BCD4',borderBottomWidth:0.6,borderColor:'black'}}
            
          />
          
        <ScrollView style={styles.container}>
        
          <Image style={styles.icon} source={require('../assets/amongus.png')}/>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Page1')}>
          <Image style={styles.pic1} source={require('../assets/mobiles.jpg')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Page3')}>
          <Image style={styles.pic1} source={require('../assets/laptops.jpg')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Page2')}>
          <Image style={styles.pic1} source={require('../assets/ac.jpg')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Page5')}>
          <Image style={styles.pic1} source={require('../assets/dslr.jpg')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Page6')}>
          <Image style={styles.pic1} source={require('../assets/refri.jpg')}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Page4')}>
          <Image style={styles.pic1} source={require('../assets/wm.jpg')}/>
          </TouchableOpacity>
          
         
          
         
          
         
        </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor:'transparent'
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  bg:{
    paddingTop:StatusBar.currentHeight,
    alignSelf:'center',
    backgroundColor:'#ccffff'

  },
  img:{
    alignSelf:'center',
    width:width,
    color:'#00BCD4'
    
  },
  txt:{
    color:'tomato',
    fontSize:30,
    textAlign:'center',
    paddingTop:'15%'
    //backgroundColor: 'yellow',
    //justifyContent:'center'
  },
  icon:{
    
    resizeMode:'contain',
    width:400,
    height:100,
    //height:50,
    alignSelf:'center',
    marginVertical:'15%',
  },
  lists:{
    paddingTop:50,
  },
  ddm:{
  width:'50%',
  },
  pic1:{
    width:width-20,
    height:(width*9)/16,
    margin:10,
    borderRadius:10,

   
    

    
  }
});


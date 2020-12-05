import React, { Component } from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import {AntDesign,Feather} from'@expo/vector-icons'

 class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    return (
      <View style={{flex: 1}}>
       <CardView/>
      </View>
    );
  }
}


class CardView extends Component{
  render(){
    return <View style={StyleSheet.cardViewMain}>  
  <view Style={styles.imageView}>
    <Image source={require('./라이언.png')} style={styles.img}/>

  </view>
  <view Style={styles.iconView}>
    <AntDesign name= "hearto" style={{fontSize:30}}/>
    <AntDesign name= "message1" style={{fontSize:30}}/>
    <Feather name= "send" style={{fontSize:30}}/>
    <Feather name= "bookmark" style={{fontSize:30}}/>
    
  </view>
  <view Style={styles.textView}></view>
  </View>;
  }
  }

  const styles =StyleSheet.create({
    cardViewMain: {
      width:"100%",
      height:300,
    },
    imageView:{
      flex:7,
      backgroundColor:'blue',
    },
    iconView:{
      flex:1,
      backgroundColor:'purple',
      flexDirection:'row',
    },
    textView:{
      flex:2,
      backgroundColor:'red',
    },
    img:{
      width:"100%",
      height:"100%",
    },
  });
  export default App;



import React from 'react';
import { StyleSheet,View,Image} from 'react-native';
import { Component } from 'react';


class splash extends Component {
     componentDidMount(){
        setTimeout(()=>{
          this.props.navigation.navigate('Profile');
                },3000)
    }
render() {
  return (
<View style={styles.container}>
        <Image 
        style={{flex:1,height:580,width:360,justifyContent:'center',alignItems:'center'}}
        source={require('../assets/yb.png')} />

        </View>
        

  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    marginBottom:3000
  }
});
export default splash;
import React, { Component } from "react";
import { StyleSheet, View, Text ,Image,Dimensions} from "react-native";
import {Header,Container,Content,Left,Body,Button,Right} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageOverlay from "react-native-image-overlay";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from '../components/Card';
import {connect} from 'react-redux';

var {width,height} =Dimensions.get('window')
// var images =[
//   require('../assets/dog.jpg'),
//   require('../assets/dog.jpg'),
//   require('../assets/dog.jpg'),
//   require('../assets/dog.jpg'),
//   require('../assets/dog.jpg'),
//   require('../assets/dog.jpg'),
//   require('../assets/dog.jpg'),
//   require('../assets/dog.jpg'),
//   require('../assets/dog.jpg'),
//   require('../assets/dog.jpg'),

// ]


class profile extends Component {

constructor(props){
    super(props)
    this.state ={
      activeIndex:0
    }
}

segmentClicked =(index) => {
  this.setState({
    activeIndex:index
  })
}

renderSectionOne =()=>{
  return this.props.photos.photos_list.map((image,index)=>{

    return(
      <View key={index} style ={[{width:(width)/2},{height:(width)/2},
      
        index % 2 !=0?{paddingLeft:2} : {paddingLeft:0},
        {marginBottom:2}
      ]}>
        
        <Image style ={{flex:1,width:undefined,height:undefined}}
        source={image}
        />

      </View>
    )
  }) 

}

renderSection =() => {
  if(this.state.activeIndex == 0){
    return(
      <View style ={{flexDirection:'row',flexWrap:'wrap'}}>
        {this.renderSectionOne()}
      </View>
    )
  }
  else if(this.state.activeIndex == 1)
  {
    var follower_List = this.props.followers.followers_list.map((follower,index) => {
      return(
        <Card
          name={follower.name}
          image={follower.image}
          username={follower.userName}
          key={index}
        />
      )
    })
    return(
      <Container>
        <Content>
          {follower_List}
        </Content>
      </Container>
    )
  }
}




  render(){
    return (
      <Container style ={{flex:1}}>
        {/* <Header style={{backgroundColor:'white'}}>
          <Left>
             <Icon name ='arrow-left' size={25} paddingLeft={10}/>
          </Left>
          <Right>
          <Icon name ='edit' size={25}/>
          <Icon name ='retweet' size={25}/>
          </Right>
        </Header> */}

        <Content>
        
         
  <ImageOverlay
           source={(require('../assets/dog.jpg'))}
             height={0.5 * height} 
           contentPosition="bottom">
               
        <View>
        
            <Image style={{width:80,height:80,marginTop:10,marginLeft:55}} source={(require('../assets/avatar.png'))} />
            <Text style={{color:'white',marginBottom:2,alignSelf:'center',}}>Arpit Raj</Text>
           <Text style={{color:'white',marginBottom:2,alignSelf:'center',}}>🤵arpit1991         🏢Varansi India</Text>
          
          <Text style={{color:'white',marginBottom:80,alignSelf:'center',}}>A random shitty Bio</Text>
          
        </View>
       
  </ImageOverlay>
  <View>
      <View style ={{flexDirection:'row',justifyContent:'space-around',borderTopColor:'#eae5e5',borderTopWidth:3,borderBottomWidth:2,flex:2}}>
       <View style={{alignItems:'center'}}>
        <TouchableOpacity
        onPress={()=>this.segmentClicked(0)}
        active ={this.state.activeIndex == 0}
        >
          <Text style={{alignSelf:'center'}}>20</Text>
        <Text 
        style ={[this.state.activeIndex == 0 ?{fontSize:15,borderBottomColor:'black',borderBottomWidth:3,} :
        {fontSize:15}]}
        >Photos
        </Text>
        </TouchableOpacity>
        </View>
      <TouchableOpacity
       onPress={()=>this.segmentClicked(1)}
       active ={this.state.activeIndex == 1}
      >
         <Text style={{alignSelf:'center'}}>7</Text>
        <Text
        style ={[this.state.activeIndex == 1 ?{fontSize:15,borderBottomColor:'black',borderBottomWidth:3,} :
          {fontSize:15}]}
        >
          Followers
        </Text>
        </TouchableOpacity>

      </View>
      {this.renderSection()}
      </View>
      

        </Content>
      </Container>
    );
    
  }
}

const mapStateToProps = (state) =>{
  return{
    followers: state.followers,
    photos: state.photos
  }
}

export default connect(mapStateToProps)(profile);
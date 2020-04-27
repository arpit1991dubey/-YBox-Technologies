import React, { Component } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Text, View,TextInput,Button,Image } from "react-native";
import {Card,CardItem,Thumbnail,Body,Left,Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from "react-native-reanimated";


class CardComp extends Component {
	render() {
	    return (
            <Card style={{backgroundColor:'grey'}}>
                <CardItem>
                    <Left>
                        <Image 
                            style={{width:50,borderRadius:25,height:50}}
                            source={this.props.image}
                        />
                        <Body>
                            <Text>{this.props.name}</Text>
                            <Text>{this.props.username}</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Icon name ='plus-circle' size={32} paddingLeft={10} color='#0080ff'/>
                    </Right>
                </CardItem>
            </Card>
            
		);
	}
}




export default CardComp;
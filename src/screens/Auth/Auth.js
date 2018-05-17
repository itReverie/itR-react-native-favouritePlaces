import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, ImageBackground} from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground"
import backgroundImage from '../../assets/background.jpg'

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component{

    onLogin = () =>{
       startMainTabs(); 
    }
    render(){
        return(
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <MainText><HeadingText>Please Log In</HeadingText></MainText>
                <ButtonWithBackground color="#29aaf4" onPress={()=> alert('Hello')}>Switch to Login</ButtonWithBackground>
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="e-mail address" style={[styles.input]} />
                    <DefaultInput placeholder="password" style={[styles.input]}  />
                    <DefaultInput placeholder="confirm password"  style={[styles.input]} />
                </View>
                <ButtonWithBackground color="#29aaf4" onPress={this.onLogin} >Submit</ButtonWithBackground>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent: "center",
       alignItems:"center"
    },
    inputContainer:{
        width:"80%",
        justifyContent:"center",
        alignContent: "center"
    },
    input:{
        backgroundColor: "#eee",
        borderColor: "#bbb"
    }, 
    backgroundImage:{
        flex:1,
        width:"100%"
    }
})

export default AuthScreen;
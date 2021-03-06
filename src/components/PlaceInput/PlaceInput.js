import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class PlaceInput extends Component {
  state = {
    placeName:'', 
  }

placeNameChangeHandler = (val) =>{
  this.setState({placeName:val});
};

onPlaceAdded = () =>{
  if(this.state.placeName.trim() === ""){
    return;
  }
  this.props.onPlaceAdded(this.state.placeName);
};


  render(){
    return(
            <View style={styles.inputContainer}>
                    <TextInput 
                        style={{width: 300}}
                        placeholder="Awesome place"
                        onChangeText={this.placeNameChangeHandler}
                        value={this.state.placeName}
                        style={styles.placeInput}/>
                    <Button title="Add"
                            onPress={this.onPlaceAdded}
                            style={styles.placeButton}/>
            </View>
    )
  }
}

const styles = StyleSheet.create({
    inputContainer:{
        width:"100%",
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:"center"
    },
    placeInput:{
      width:"70%"
    },
    placeButton:{
      width:"30%"
    }
}) ;


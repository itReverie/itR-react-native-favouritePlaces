import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
      placeName:'', 
      places:[],
  }

  placeNameChangeHandler = (val) =>{
    this.setState ({placeName:val});
  };

  placeSubmitHandler = () =>{
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.setState(prevState => {return {
      places: prevState.places.concat(prevState.placeName)
    }});
  };
  
  render() {
    const places= this.state.places.map((place, i) =>(<Text key={i}>{place}</Text>));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
              <TextInput 
                style={{width: 300}}
                placeholder="Awesome place"
                onChangeText={this.placeNameChangeHandler}
                value={this.state.placeName}
                style={styles.placeInput}/>
               <Button title="Add"
               onPress={this.placeSubmitHandler}
               style={styles.placeButton}/>
        </View>
        <View>
            {places}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer:{
      //flex: 1,
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
});

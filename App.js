import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends React.Component {

  state ={
      places:[]
  };

  onPlaceAdded = (placeName) =>{
    this.setState(prevState => {return {
      places: prevState.places.concat(placeName)
    }});
  };

  onItemDeleted = (index) =>{
    this.setState(prevState => { return {
        places: prevState.places.filter((place,i ) => {
            return i!==index;
        })
      }
    })
}
  
  render() {
    //onItemPressed={this.onItemPressed}
      return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.onPlaceAdded}/>
        <PlaceList placesList={this.state.places}
                  onItemDeleted={this.onItemDeleted} />

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
  }
});

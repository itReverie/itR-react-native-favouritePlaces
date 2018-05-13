import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/yanhui.jpg';
export default class App extends React.Component {

  state ={
      places:[]
  };

  onPlaceAdded = (placeName) =>{
    this.setState(prevState => {return {
      places: prevState.places.concat({
          key: Math.random(),
          name: placeName, 
          image: placeImage
      })
    }});
  };

  onItemDeleted = (key) =>{
    this.setState(prevState => { return {
        places: prevState.places.filter((place ) => {
            return place.key!==key;
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

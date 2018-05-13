import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/yanhui.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {

  state ={
      places:[], 
      selectedPlace: null,
  };

  onPlaceAdded = (placeName) =>{
    this.setState(prevState => {return {
      places: prevState.places.concat({
          key: Math.random(),
          name: placeName, 
          image: {
                  uri:"https://upload.wikimedia.org/wikipedia/commons/e/e5/HTTPS_icon.png"
          }
      })
    }});
  };

  onItemSelected = (key) =>{
    this.setState(prevState => { return {
        selectedPlace: prevState.places.find(place => {
            return place.key===key;
        })
      }
    })
}

onItemDeleted = () =>{
  this.setState(prevState => { return {
    places: prevState.places.filter(place => {
        return place.key !== prevState.selectedPlace.key;
    }), 
    selectedPlace: null
  }
})
}

onModalClosed = () =>{
    this.setState({
      selectedPlace: null
    });
}
  
  render() {
    //onItemPressed={this.onItemPressed}
      return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace}
                     onItemDeleted= {this.onItemDeleted} 
                     onModalClosed= {this.onModalClosed}/>
        <PlaceInput onPlaceAdded={this.onPlaceAdded}/>
        <PlaceList placesList={this.state.places}
                  onItemSelected={this.onItemSelected} />

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

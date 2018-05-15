import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/yanhui.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {connect} from 'react-redux';
import {addPlace, deletePlace, selectPlace,deselectPlace} from './src/store/actions'
class App extends React.Component {

onPlaceAdded = (placeName) =>{
  console.log(placeName);
  this.props.onAddPlace(placeName)
};

onItemSelected = (key) =>{
  this.props.onSelectPlace(key)
}

onItemDeleted = () =>{
  this.props.onDeletePlace()
}

onModalClosed = () =>{
  this.props.onDeselectPlace()
}
  
  render() {
      return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlaces}
                     onItemDeleted= {this.onItemDeleted} 
                     onModalClosed= {this.onModalClosed}/>
        <PlaceInput onPlaceAdded={this.onPlaceAdded}/>
        <PlaceList placesList={this.props.places}
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

const mapStateToProps = state  => {
  return {
      places: state.places.places,
      selectedPlaces : state.places.selectedPlace
  };
}

const mapDispatchToProps = dispatch =>{
  return {
  onAddPlace: (name)=> dispatch(addPlace(name)),
  onDeletePlace: ()=> dispatch(deletePlace()),
  onSelectPlace: (key)=> dispatch(selectPlace(key)),
  onDeselectPlace: ()=> dispatch(deselectPlace())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
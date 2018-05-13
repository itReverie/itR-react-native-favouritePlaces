import React from 'react';
import {StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';


const placeList = (props) =>{
   // const places= props.placesList.map((place, i) =>(
                //     <ListItem key={i} 
                //                 placeName={place} 
                //                 onItemPressed={()=> props.onItemDeleted(i)}/>
                //  ));

    return (<FlatList style={styles.listContainer}
                      data={props.placesList} 
                      renderItem={(info) => (
                        <ListItem key={info.item.key}
                                  placeName={info.item.value} 
                                  onItemPressed={()=> props.onItemDeleted(info.item.key)}/>
                      )}
           />);
}

const styles = StyleSheet.create({
    listContainer:{
      width: "100%"
    }
  });
export default placeList;
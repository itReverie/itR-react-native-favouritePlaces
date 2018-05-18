import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => (
             <DefaultInput placeholder="PlaceName"
                           value={props.placeName}
                           onChangeText={props.onChangeText} />
);

export default placeInput;

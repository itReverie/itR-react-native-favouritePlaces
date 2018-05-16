//Registere screen and start the navigation with one

import {Navigation}  from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';


//Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", ()=> AuthScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen", ()=> SharePlaceScreen );
Navigation.registerComponent("awesome-places.FindPlaceScreen", ()=> FindPlaceScreen );

//start app
Navigation.startSingleScreenApp({
  screen: {
      screen:"awesome-places.AuthScreen", 
      title: "Login",
  }
});
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
//note: 
//We cannot use <Icon /> as we need the path
//We cannot use Icon.getImageSource() as it returns a promise as it is async
//so we will call this so it first loads


//Create a function that I can run whenever I want to call the startTabBasedApp
const startTabs = () => {
    Promise.all([ 
                Icon.getImageSource("md-map",30),
                Icon.getImageSource("ios-share-alt",30)]).
            then(sources => {
                Navigation.startTabBasedApp({
                    tabs: [{
                        screen: "awesome-places.FindPlaceScreen",
                        label: "Find Place",
                        title: "Find Place",
                        icon: sources[0]
                    },
                    {
                        screen: "awesome-places.SharePlaceScreen",
                        label: "Share Place",
                        title: "Share Place",
                        icon: sources[1]
                    }]
                });
            })
};

export default startTabs;
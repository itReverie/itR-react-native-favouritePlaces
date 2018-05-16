import {ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes';
const initialState = {
    places:[], 
};

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_PLACE:
          return {...state,
            places: state.places.concat({
                key: Math.random(),
                name: action.placeName, 
                image: {
                        uri:"https://upload.wikimedia.org/wikipedia/commons/e/e5/HTTPS_icon.png"
                }
            })
        };
        case DELETE_PLACE:
            return {...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                }), 
            }; 

        default:
                return state;
    }
};

export default reducer;
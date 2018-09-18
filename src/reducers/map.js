import { mapIdChange } from '../actions/MapActions';
export default (state = Map(), action) => {
    switch (action.type) {
        case zoom_changed:
         return {
            ...state,
            zoom: action.payload.getZoom(),
        };    
        default:
            return state;
    }
};

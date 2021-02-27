import { combineReducers } from 'redux';
import { WRITE_IMAGES_CONFIG, DELETE_IMAGE, SET_ACTIVE, DELETE_ACTIVE } from '../constants/index';

const initState = {
    imagesConfig: [],
    active: ''
}

const reduser = (state = initState, action) => {
    switch( action.type ) {
        case WRITE_IMAGES_CONFIG:
            return ({
                ...state,
                imagesConfig: action.payload
            })
        
        case DELETE_IMAGE: 
            return({
                ...state,
                imagesConfig: state.imagesConfig.filter(image=>image.default!==action.payload)
            })
        case SET_ACTIVE: 
            return({
                ...state,
                active: action.payload
            })
        case DELETE_ACTIVE: 
            return({
                ...state,
                active: ''
            })
        default:
            return state;
    }
}

export default reduser;
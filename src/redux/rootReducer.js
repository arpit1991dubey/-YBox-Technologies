import followers from './reducers/followers';
import photos from './reducers/photos';
import {combineReducers} from 'redux'

var rootReducer = combineReducers({
    followers:followers,
    photos:photos
})

export default rootReducer;
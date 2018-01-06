import {combineReducers} from 'redux';
import login from './login'
import video from './video'

const rootReducer = combineReducers({
    login,
    video
})

export default rootReducer;
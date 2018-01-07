import {combineReducers} from 'redux';
import login from './login'
import video from './video'
import cartoon from './cartoon'
import novel from './novel'
import router from './router'

const rootReducer = combineReducers({
    login,
    video,
    cartoon,
    novel,
    router
})

export default rootReducer;
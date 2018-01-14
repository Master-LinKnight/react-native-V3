import {combineReducers} from 'redux';
import login from './login'
import video from './video'
import cartoon from './cartoon'
import novel from './novel'
import router from './router'
import chapter from './chapter'
import image from './image'

const rootReducer = combineReducers({
    login,
    video,
    cartoon,
    novel,
    router,
    chapter,
    image
})

export default rootReducer;
import {combineReducers} from 'redux';
import login from './login'
import video from './video'
import cartoon from './cartoon'
import novel from './novel'
import router from './router'
import chapter from './chapter'
import image from './image'
import register from './register'
import search from './search'

const rootReducer = combineReducers({
    login,
    video,
    cartoon,
    novel,
    router,
    chapter,
    image,
    register,
    search
})

export default rootReducer;
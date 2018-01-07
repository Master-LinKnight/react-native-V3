import * as types from '../actions/types'

const initialState = {
    isChange: false,
    target: null
}

export default function router(state=initialState, action){
    switch (action.type) {
        case types.Router_Change:
            return {
                isChange: true,
                data: action.target
            }
        default:
            return state
    }
}
import * as types from './types'

export function changeRouter(_target) {
    return dispatch => {
        dispatch(routerChange(_target))
    }
}

function routerChange(_target) {
    return {
        type: types.Router_Change,
        isChange: true,
        target: _target
    }
}

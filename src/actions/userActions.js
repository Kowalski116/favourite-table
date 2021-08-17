import axios from 'axios'
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../constaints'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (data, page) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: { ...data, page }
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = (pagination) => dispatch => {
    dispatch(fetchUsersRequest())
    axios.get('people/?page=' + pagination.current)
        .then((res) => {
            console.log(res)
            dispatch(fetchUsersSuccess(res.data, pagination.current))
        })
        .catch(err => {
            const errMsg = err.message
            dispatch(fetchUsersFailure(errMsg))
        })
}


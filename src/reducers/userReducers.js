import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../constaints'
const initialState = {
    loading: false,
    users: [],
    error: '',
    total: 0,
    next: null,
    previous: null,
    current: 1
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                // users: [...state.users, action.payload],
                users: action.payload.results,
                total: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                current: action.payload.page,
                error: ""
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default usersReducers
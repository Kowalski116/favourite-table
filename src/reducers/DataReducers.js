import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SET_NAME, SET_TABLE_TYPE, UNSET_NAME } from '../constaints'
const initialState = {
    show: false,
    loading: false,
    data: [],
    error: '',
    name: "",
    tableType: ""
}

const dataReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case UNSET_NAME:
            return {
                ...state,
                name: ''
            }
        case SET_TABLE_TYPE:
            return {
                ...state,
                tableType: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload,
                name: ''
            }
        default:
            return state
    }
}

export default dataReducers
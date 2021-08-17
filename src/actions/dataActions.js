import axios from 'axios'
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SET_NAME, SET_TABLE_TYPE, UNSET_NAME } from '../constaints'




export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}


export const setName = (name) => {
    return {
        type: SET_NAME,
        payload: name
    }
}

export const setTableType = (tableType) => {
    return {
        type: SET_TABLE_TYPE,
        payload: tableType
    }
}

export const unsetName = () => {
    return {
        type: UNSET_NAME,
    }
}

export const fetchDataArray = (arrayLink, name, tableType) => dispatch => {
    if (arrayLink.length === 0) return
    dispatch(fetchDataRequest())
    dispatch(setName(name))
    dispatch(setTableType(tableType))
    const temp = []
    arrayLink.forEach(element => {
        temp.push(axios.get(element).then((res) => res.data))
    });

    Promise.all(temp)
        .then((res) => {
            const temp = res.map(r => r.data)
            console.log(temp)
            console.log(res)
            dispatch(fetchDataSuccess(res))
        })
}


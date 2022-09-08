const redux = require("redux");
const createStore = redux.createStore;

// const thunkMiddleware = require("redux-thunk");

// const axios = require("axios");

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

function fetchUsersRequest () {
    return {
        type: FETCH_USERS_REQUEST
    }
}

function fetchUsersSuccess (users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

function fetchUsersError (error) {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS_REQUEST: return {
            ...state, 
            loading: true
        }
        case FETCH_USERS_SUCCESS: return {
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAIL: return {
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

const store = createStore(reducer);

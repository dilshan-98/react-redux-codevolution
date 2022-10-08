const redux = require('redux');
const axios = require('axios');
const createStore = redux.createStore;
const middleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;

//state
const initialState = {
    loading: false,
    users: [],
    error: ""
}

const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

//action
function FETCH_USERS_REQUEST1() {
    return {
        type: FETCH_USERS_REQUEST
    }
}

function FETCH_USERS_SUCCESS1(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

function FETCH_USERS_FAIL1(error) {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload
        }

        case FETCH_USERS_FAIL: return {
            ...state,
            users: [],
            error: action.payload
        }
    }
}

//store and the thunk relied function

function fetchUsers() {
    return function (dispatch) {
        dispatch(FETCH_USERS_REQUEST1());
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const user = response.data.map(user => user.id)
            dispatch(FETCH_USERS_SUCCESS1(user));
        })
        .catch(err => dispatch(FETCH_USERS_FAIL1(err.message)))
    }
}

const store = createStore(reducer, middleware(thunk));

store.subscribe(() => {console.log("Updated State: ", store.getState())})

store.dispatch(fetchUsers())
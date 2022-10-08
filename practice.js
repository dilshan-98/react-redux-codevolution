const redux = require('redux');
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const SECOND_ACTION = "SECOND_ACTION";

//state
const initState = {
    noOfCakes : 10
}

const initSecondState = {
    noOfSeconds: 10
}

//action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "Hi"
    }
}

function secondAction() {
    return {
        type: SECOND_ACTION
    }
}

//reducer
const reducer = (state = initState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes - 1
        }

        default: return state;
    }
}

const secondReducer = (state = initSecondState, action) => {
    switch (action.type) {
        case SECOND_ACTION: return {
            ...state,
            noOfSeconds: state.noOfSeconds - 2
        }

        default: return state;
    }
}

//rootReducer
const rootReducer = combineReducer({
    cake: reducer,
    second: secondReducer
})

//store

//const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Init state: ", store.getState());

//const unsubscribe = store.subscribe(() => {console.log("Updated state: ", store.getState())});
store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(secondAction());
store.dispatch(secondAction());

//unsubscribe();
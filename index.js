const redux = require("redux");
const createStore = redux.createStore;

console.log("From index.js")

const BUY_CAKE = "BUY_CAKE";

// Action Object
// {
//     type: BUY_CAKE
// }

// Action object can have properties other than type also
// {
//     type: BUY_CAKE,
//     info: "First Redux Action"
// }

//Action
//Defining the action as a fucntion makes it easier to add more properties later
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux Action"
    }
}

//State
const initialState = {
    numOfCakes: 10
}

//Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, //This is to copy the state first and update only the changing property
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}


///////    Store    ////////

//We use Redux here for the store
// 1. Define the store
const store = createStore(reducer);

// 2. Allow access to state using getState() ---- Here it is just to see the initial state
console.log('Initial State ', store.getState());  // Output: Initial State  { numOfCakes: 10 }

// 3. Register to the listeners [Subscribe method accepts a function soo..]
//store.subscribe(() => console.log("Updtaed State ", store.getState()))
const unsubsribe = store.subscribe(() => console.log("Updated State ", store.getState()));

// 4. To update the state
//This usually takes actions directly but since we have a action creater (buyCakes), we can use it here
//We repeat this just to see the output now
store.dispatch(buyCake())  // Output: Updated State  { numOfCakes: 9 }
store.dispatch(buyCake())  // Output: Updated State  { numOfCakes: 8 }
store.dispatch(buyCake())  // Output: Updated State  { numOfCakes: 7 }

// 5. Unsubsribe the listener [We do it by calling the function returned by the subscribe method]
unsubsribe();
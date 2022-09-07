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
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux Action"
    }
}

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


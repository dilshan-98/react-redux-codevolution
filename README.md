# react-redux-codevolution

# Theory

*"A predictable state container for javascript" 

*Prevents prop drilling

*useContext and useReducer can also manage states 

*3 Core Concepts: Store (Hold the state), Action (Describe the changes in the state), Reducer (Tie store and action together)

*Three principles (for coding redux) :  1. State stored in a single object --> Ex: {
                                                                                        numOfCakes: 10,
                                                                                    }
                                        2. To update the state of state, redux should be informed through an action usign "type" property. --> Ex: {
                                                                        type: BUY_CAKE,
                                                                        }   <!-- //Type: is a string constant -->
                                        3. Write reducer to mention how the transformation happens when action is there.
                                        ---> Ex: const reducer = (state, action) => {
                                                    switch(action.type){
                                                        case BUY_CAKE: return {
                                                            numOfCakes: state.numOfCakes - 1 //get current no of cakes
                                                        }
                                                    }
                                                }





# Practicals 

1. create a package.json using:

    npm init --yes



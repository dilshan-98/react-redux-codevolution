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

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux Action"
    }
}


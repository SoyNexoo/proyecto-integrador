import reducer from "./reducer"
const {createStore} = require("redux");

let store = createStore(reducer);

export default store
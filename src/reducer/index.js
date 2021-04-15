import soko from "./soko";
import cart from "./cartItems";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    soko,
    cart
});

export default allReducers;
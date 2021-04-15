import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from "../actions/types";


const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.payload;

      case ADD_ITEM:
          return [...state, action.payload]
      
      case DELETE_ITEM:
        return  state.filter((item) => item._id !== action.payload)

          
          
        default:
      return state;
  }
};

export default cart;
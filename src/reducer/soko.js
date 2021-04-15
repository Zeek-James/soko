import kids from "../images/pexels-pixabay-459957.jpg";
import faceMask from "../images/pexels-kebs-visuals-3109743.jpg";
import beat from "../images/pexels-torsten-dettlaff-347700.jpg";
import grocery from "../images/pexels-lisa-fotios-1992912.jpg";
import freshFood from "../images/pexels-pixabay-255501.jpg";
import home from "../images/pexels-emre-can-2079249.jpg";
  


const initialState = [
  { id: 1, pic: kids, title: 'Kids', price: 10000 },
  { id: 2, pic: faceMask, title: 'Face Mask', price: 700},
  { id: 3, pic: beat, title: 'Electronics', price: 140000},
  { id: 4, pic: grocery, title: 'Grocery', price: 15000},
  { id: 5, pic: freshFood, title: 'Fresh Food', price: 7000},
  { id: 6, pic: home, title: 'Home',  price: 250000 }
  
]

const soko = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return state;
  
      default:
        return state;
    }
  };
  
  export default soko;
import kids from "../images/pexels-pixabay-459957.jpg";
import faceMask from "../images/pexels-kebs-visuals-3109743.jpg";
import beat from "../images/pexels-torsten-dettlaff-347700.jpg";
import grocery from "../images/pexels-lisa-fotios-1992912.jpg";
import freshFood from "../images/pexels-pixabay-255501.jpg";
import home from "../images/pexels-emre-can-2079249.jpg";
  


const initialState = [
  { id: 1, pic: kids, title: 'Kids' },
  { id: 2, pic: faceMask, title: 'Face Mask' },
  { id: 3, pic: beat, title: 'Electronics' },
  { id: 4, pic: grocery, title: 'Grocery' },
  { id: 5, pic: freshFood, title: 'Fresh Food' },
  { id: 6, pic: home, title: 'Home' }
  
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
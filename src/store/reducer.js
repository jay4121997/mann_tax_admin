import * as actionTypes from "./actionTypes";
let initialState = {
  author: "Dina Kesariya",
  createdOn: "",
  title: "",
  data:'<div>Initial State....</div>'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE: {
      return {
        ...state,
        richText: action.text,
      };
    }
    case actionTypes.UPDATE_BLOG : {
      return {
        ...state
      }
    }
    case actionTypes.CONTACT: {
      return {
        ...state,
        contact:action.contact
      }
      }
    default:
      return state;
  }
};
export default reducer;

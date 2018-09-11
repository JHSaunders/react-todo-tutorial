import { createStore } from "redux";

const initialState = {
  items: ["I am", "Pickle Rick", "Yeah"],
  selectedIndex: null
};

export const selectItemActionCreator = index => ({
  type: "SELECT",
  index: index
});

export const removeItemActionCreator = () => ({
  type: "REMOVE"
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT":
      return {
        ...state,
        selectedIndex: action.index
      };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(
          (item, index) => index !== state.selectedIndex
        ),
        selectedIndex: null
      };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import { connect } from "react-redux";
import { selectItemActionCreator, removeItemActionCreator } from "./store";
import { App } from "./App";

const mapStateToProps = state => ({
  items: state.items,
  selectedIndex: state.selectedIndex
});

/*

// This is a shorter version of what is below

const mapDispatchToProps = {
  selectItem: selectItemActionCreator,
  removeItem: removeItemActionCreator
};
*/

const mapDispatchToProps = dispatch => {
  const selectItem = id => dispatch(selectItemActionCreator(id));
  const removeItem = () => dispatch(removeItemActionCreator());

  return { selectItem: selectItem, removeItem: removeItem };
};

export const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

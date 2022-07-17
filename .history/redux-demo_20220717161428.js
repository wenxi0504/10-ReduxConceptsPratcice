const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
};
const store = redux.createStore(counterReducer);
console.log(store.getState());

const counterSubscriber = () => {
  //latest state snapshot after it was updated
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });

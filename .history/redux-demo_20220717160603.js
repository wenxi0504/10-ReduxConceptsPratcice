const redux = require("redux");

const counterReducer = (state, action) => {
  return {
    counter: state.counter + 1,
  };
};
const store = redux.configureStore(counterReducer);

const counterSubscriber = () => {
  //latest state snapshot after it was updated
  const latestState = store.getState();
  console.log(latestState);
};

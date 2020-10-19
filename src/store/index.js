import { combineReducers, createStore } from "redux";

import gameReducer from "./reducers/gameReducer";
import personReducer from "./reducers/personReducer";

// import update_person from "./actions/personActions";

const AllReducers = combineReducers({
	game: gameReducer,
	person: personReducer
});

const InitialStates = {
	game: { name: "Football" },
	person: { name: "Isabel" }
};

const store = createStore(
	AllReducers,
	InitialStates,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

// store.dispatch(update_person);

// console.log(store.getState());

export default store;

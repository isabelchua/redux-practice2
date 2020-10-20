import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import gameReducer from "./reducers/gameReducer";
import personReducer from "./reducers/personReducer";
import userReducer from "./reducers/userReducer";

// import update_person from "./actions/personActions";

const AllReducers = combineReducers({
	game: gameReducer,
	person: personReducer,
	users: userReducer
});

const InitialStates = {
	game: { name: "Football" },
	person: { name: "Isabel", email: "isabel@gmail.com" },
	users: []
};

const middleware = [thunk];

const store = createStore(
	AllReducers,
	InitialStates,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

// console.log(store.getState());

// store.dispatch(update_person);

// console.log(store.getState());

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

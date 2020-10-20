import { UPDATE_PERSON } from "../actions/personActions";

const personReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case UPDATE_PERSON:
			return { name: payload };
		default:
			return state;
	}
	//console.log(actions);
};

export default personReducer;

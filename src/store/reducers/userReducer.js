import { UPDATE_USER } from "../actions/userActions";

const userReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case UPDATE_USER:
			return { name: payload };
		default:
			return state;
	}
	//console.log(actions);
};

export default userReducer;

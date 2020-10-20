// import { UPDATE_GAME } from "./gameActions";

export const UPDATE_USER = "UPDATE_USER";

const fetch_user = dispatch => {
	fetch("https://reqres.in/api/users")
		.then(res => res.json())
		.then(res => dispatch({ type: UPDATE_USER, payload: res.data }));
};

// const update_user = { type: UPDATE_USER, payload: "user" };

// export default update_user;
export default fetch_user;

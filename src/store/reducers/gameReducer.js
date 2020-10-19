const gameReducer = (state = {}, { type, payload }) => {
	if (type === "UPDATE_GAME") {
		return payload;
	}
	return state;
};

export default gameReducer;

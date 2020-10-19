const personReducer = (state = {}, actions) => {
	//console.log(actions);
	if (actions.type === "UPDATE_PERSON") {
		return { name: actions.payload };
	}

	return state;
};

export default personReducer;

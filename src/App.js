import React from "react";

import "./App.css";

import update_person from "./store/actions/personActions";
import update_game from "./store/actions/gameActions";

import { connect } from "react-redux";
import fetch_user from "./store/actions/userActions";

// function updatePerson() {
// 	store.dispatch(update_person);
// }

// function updateGame() {
// 	store.dispatch(update_game);
// }

function App(props) {
	console.log(props);
	return (
		<div className="App">
			<h1>Redux</h1>
			Person Name: {props.person.name}
			<button onClick={props.updatePerson}>Update Person</button>
			<br />
			Game Name: {props.game.name}
			<button onClick={props.updateGame}>Update Game</button>
			<br />
			Users : <button onClick={props.fetchUsers}>Fetch Users</button>
			{props.users.length === 0 ? (
				<p>No User found</p>
			) : (
				props.users.map(user => (
					<p key={user.id}>
						{user.id} - {user.first_name} - {user.email}
					</p>
				))
			)}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		game: state.game,
		person: state.person,
		users: state.users
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateGame: () => {
			dispatch(update_game);
		},
		updatePerson: () => {
			dispatch(update_person);
		},
		fetchUsers: () => {
			dispatch(fetch_user);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

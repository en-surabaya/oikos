import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGetUsersQuery } from "./generated/graphql";

function App() {
	const { data } = useGetUsersQuery();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{data?.users.map((user) => {
					return <div key={user.id}>{user.name}</div>;
				})}
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;

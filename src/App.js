import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import User from "./User";

function App() {
	const Name = () => {
		return <>Name</>;
	};
	return (
		<div className="App">
    <Navbar/>
			<Routes>
				{/* <Route exact path="/" component={About} /> */}
				<Route exact path="/" element={<About Name="About"/>} />

				<Route exact path="/contact" element={<Contact Name="Contact" />} />
				{/* <Route path="/contact/name" element={<Name />} /> */}
<Route path="/user/:fname/:lname" element={<User/>}/>
				<Route path="/*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App;

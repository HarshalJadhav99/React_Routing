import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="Custom_Menu">
				<NavLink exact className="active_class" to="/">
					AboutUS
				</NavLink>
				<NavLink exact className="active_class" to="/contact">
					ContactUS
				</NavLink>
                <NavLink exact className="active_class" to="/user/harshal/jadhav">User</NavLink>
			</div>
		</>
	);
};

export default Navbar;

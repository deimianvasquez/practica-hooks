import React from "react";
import PropTypes from "prop-types";
//components
import User from "./User.jsx";

//bootstrap-components

const Users = ({ usuarios }) => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<ul>
						{usuarios.map((usuario, index) => {
							return <User key={index} usuario={usuario} />;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Users;

Users.propTypes = {
	usuarios: PropTypes.array
};

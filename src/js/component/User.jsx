import React from "react";
import PropTypes from "prop-types";

const User = ({ usuario }) => {
	// const { usuario } = props;
	return (
		<li>
			Nombre: {usuario.nombre} <br /> Apellido: {usuario.apellido}
		</li>
	);
};

export default User;

User.propTypes = {
	usuario: PropTypes.object
};

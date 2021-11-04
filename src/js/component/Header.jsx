import React from "react";
import PropTypes from "prop-types";

const Header = props => {
	return (
		<header className="conatiner my-5">
			<div className="row">
				<div className="col-12 text-center">
					<h1>{props.titulo}</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;

Header.propTypes = {
	titulo: PropTypes.string
};

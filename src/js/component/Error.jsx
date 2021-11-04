import React from "react";
import PropTypes from "prop-types";

const Error = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="alert alert-danger">{props.message}</div>
				</div>
			</div>
		</div>
	);
};

export default Error;
Error.propTypes = {
	message: PropTypes.string
};

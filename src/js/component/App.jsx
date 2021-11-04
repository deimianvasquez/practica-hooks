import React from "react";
import Header from "./Header.jsx";
import Navbar from "./Menu.jsx";

import FormUser from "./FormUser.jsx";
import Rigo from "../../img/rigo-baby.jpg";

import { Container, Row, Col } from "react-bootstrap";

const App = () => {
	return (
		<>
			<Navbar />
			<Container>
				<Row>
					<Col xs={12} md={6}>
						<img src={Rigo} alt="Rigoberto" />
					</Col>
				</Row>
			</Container>

			<Header titulo="Lista de Usuarios" />
			<FormUser />
		</>
	);
};

export default App;

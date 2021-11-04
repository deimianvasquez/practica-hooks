import React, { useState } from "react";
import Error from "./Error.jsx";
import Users from "./Users.jsx";

const FormUser = () => {
	//este estado es de tipo de dato arreglo
	const [usuarios, setUsuarios] = useState([]);

	//este estado es de tipo de dato objeto
	const [user, setUser] = useState({
		nombre: "",
		apellido: ""
	});

	//Estado que dispara el error
	const [error, setError] = useState(false);

	//funcion que guarda el usuario en el useState user, con su llave valor
	const handleUser = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	//Funcion que guarda mi usuario en mi lista se usuarios (useState: usuarios)
	const handleSubmit = event => {
		event.preventDefault();
		//verificar que los campos esten llenos
		if (user.nombre.trim() != "" && user.apellido.trim() != "") {
			//funcionabilidad de todo se guarde y quito el error
			setUsuarios([...usuarios, user]);
			setUser({
				nombre: "",
				apellido: ""
			});
			setError(false);
		} else {
			setError(true);
		}
	};
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6">
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								name="nombre"
								className="form-control my-2"
								placeholder="Nombre"
								value={user.nombre}
								onChange={handleUser}
							/>
							<input
								type="text"
								name="apellido"
								className="form-control"
								placeholder="Apellido"
								value={user.apellido}
								onChange={handleUser}
							/>

							<button className="btn btn-success  my-3">
								Guardar Usuarios
							</button>
						</form>
						{/* esto es el error en caso que lo necesite */}
						{error ? (
							<Error message="Todos los campos son obligatorios" />
						) : null}
					</div>
				</div>
			</div>
			<Users usuarios={usuarios} />
		</>
	);
};

export default FormUser;

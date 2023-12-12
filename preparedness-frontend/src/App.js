import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import ModalComponent from "./components/ModalComponent";
import "./App.css";

const App = () => {
	const [name, setName] = useState(" ");

	const [modal, setModal] = useState(false);

	const changeInput = (input) => {
		setName(input.target.value);
	};

	const buttonReset = () => setName("");

	const toggle = () => setModal(!modal);

	return (
		<div className="background-image">
			<div className="entire-content">
				<h1 className="header">Preparedness Assessment</h1>
				<div className="form">
					<div className="input-label">
						<Label for="name">Enter your name</Label>
						<Input value={name} onChange={changeInput} type="text" />
					</div>
					<div className="Button-placement">
						<Button className="Button-styling" onClick={toggle}>
							Submit Name
						</Button>
						<Button className="Button-styling" onClick={buttonReset}>
							Reset
						</Button>
						<ModalComponent name={name} toggle={toggle} modal={modal} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

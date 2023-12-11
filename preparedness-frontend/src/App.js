import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import ModalComponent from "./components/ModalComponent";
import "./App.css";

const App = () => {
	const [name, setName] = useState(" ");

	const changeInput = (input) => {
		setName(input.target.value);
	};

	const buttonReset = () => {
		setName("");
	};

	return (
		<div className="background-image">
			<div className="entire-content">
				<h1 className="header">Preparedness Assessment</h1>
				<div className="form">
					<div className="input-label">
						<Label for="name">Enter your name</Label>
						<Input value={name} onChange={changeInput} />
					</div>
					<div className="Button-placement">
						<ModalComponent userName={name} />
						<Button className="Button-styling" onClick={buttonReset}>
							Reset
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

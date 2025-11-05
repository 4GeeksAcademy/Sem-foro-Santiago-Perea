import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, setColor ] = useState("red");
	const colores = ['red', 'yellow', 'green'];

	function buttonColor() { 
		const coloresRandom = colores[Math.floor(Math.random() * colores.length)];
		console.log(coloresRandom)
		setColor(coloresRandom)
	}
	
	return (
		<div className="container d-flex align-items-center flex-column">
			<div className="trafficTop"></div>
			<div className="trafficLight d-flex align-items-center flex-column pt-2">
				<div onClick={() => setColor("red")}
				className={"red light" + (color === "red" ? " glow" : "")}></div>
				<div onClick={() => setColor("yellow")} 
				className={"yellow light" + (color === "yellow" ? " glow" : "")}></div>
				<div onClick={() => setColor("green")} 
				className={"green light" + (color === "green" ?  " glow" : "")}></div>
			</div>
			<button className=" btn btn-primary" onClick={() => setColor(buttonColor)}>Semáforo</button>
		</div>
	);
};

export default Home;
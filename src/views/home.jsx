import React from "react";
import Characters from "./characters";
import Planets from "./planets";
import Vehicles from "./vehicles";


export const Home = () => (
	<div className="text-center mt-5">
		
		<Characters/>
		<Planets/>
		<Vehicles/>
	</div>
);
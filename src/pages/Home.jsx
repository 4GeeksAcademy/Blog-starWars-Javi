import React from "react";
import Characters from "../views/characters";
import Planets from "../views/planets";
import Vehicles from "../views/vehicles";


export const Home = () => (
	<div className="text-center mt-5">
		
		<Characters/>
		<Planets/>
		<Vehicles/>
	</div>
);
export default Home;
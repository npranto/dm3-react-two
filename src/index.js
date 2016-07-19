import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";

import App from "./components/App";
import Pokemon from "./components/Pokemon";
import IndividualPokemon from "./components/IndividualPokemon";


document.addEventListener("DOMContentLoaded", ()=>{
	const reactNode = document.getElementById("react-node");
	if (reactNode) {
		ReactDOM.render(

			<Router history={ browserHistory }>
				<Route path="/" component={ App }>
					<Route path="pokemon" component={ Pokemon }/>
					<Route path="pokemon/:pokemonId" component={ IndividualPokemon }/>
				</Route>
			</Router>








			, reactNode
		);
	}
})
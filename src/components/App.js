import React from "react";
import {Link, browserHistory} from "react-router";

export default class App extends React.Component{

	getRandomPokemon(){
		browserHistory.push(`/pokemon/${ Math.floor(Math.random() * 20) }`)
	}

	render(){
		return(
			<div>
				<ul>
					<li>
						<Link to="/pokemon">Pokemon</Link>
					</li>
					<li>
						<Link to="/pokemon/1">Individual Pokemon</Link>
					</li>
				</ul>
				<button onClick={this.getRandomPokemon}>Random Pokemon</button>
				{this.props.children}
			</div>
		)
	}
}
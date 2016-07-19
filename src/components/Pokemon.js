import React from "react";
import {getAllPokemon} from "../services/pokeService";
import {Link} from "react-router";

export default class Pokemon extends React.Component{

	constructor(props){
		super(props);
		this.state={
			pokemon: []
		}
	}

	componentWillMount(){
		new Promise((resolve, reject)=>{
			getAllPokemon(resolve, reject);
		}).then((res, err)=>{
			if (err) {
				console.log(err);
			}
			console.log(res);
			this.setState({pokemon: res.body.results})
		})
	}

	

	render(){

		const allPokemon = this.state.pokemon.map((pokemon)=>(
			<Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
				<li key={pokemon.name}>
					{pokemon.name}
				</li>
			</Link>
		))

		return(

			<div>
				<h1>Pokemon</h1>
				{
					this.state.pokemon.length 
						?
							<ul>
								{allPokemon}
							</ul>
						:
							<p>Loading...</p>
				}
			</div>

		)
	}
}







// Life Cycle Methods:

	// componentDidMount(){
	// 	console.log("Component did mount");
	// }

	// componentWillReceiveProps(){
	// 	console.log("Will receive props");	
	// }

	// shouldComponentUpdate(){
	// 	console.log("Should component update");
	// 	return true;
	// }

	// componentWillUpdate(){
	// 	console.log("Component will update");
	// }

	// compontDidUpdate(){
	// 	console.log("Component did update");
	// }

	// componentWillUnmount(){
	// 	console.log("Component will unmount");	
	// }
import React from "react"
import {getPokemonByName} from "../services/pokeService";

export default class IndividualPokemon extends React.Component{

	constructor(props){
		super(props);
		this.state={
			name: "",
			height: 0,
			weight: 0,
			imageUrl: ""
		}
	}
	
	componentWillMount(){
		new Promise((resolve, reject)=>{
			getPokemonByName(this.props.params.pokemonId, resolve, reject);
		}).then((res, err)=>{
			if (err) {
				return console.log(err);
			}
			this.setState({
				name: res.body.name,
				height: res.body.height,
				weight: res.body.weight,
				imageUrl: res.body.sprites.front_default
			})
		})
	}


	render(){

		return(

			<div>
				<h1>Individual Pokemon</h1>
				{
					this.state.name
						?
							<div>
								<h3>{this.state.name}</h3>
								<img src={this.state.imageUrl}/>
								<p>{this.state.height}</p>
								<p>{this.state.weight}</p>
							</div>
						:
						<p>One Moment...</p>

					
				}
			</div>

		)
	}
}
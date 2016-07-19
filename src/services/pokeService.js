import request from "superagent";

export function getAllPokemon(resolve, reject) {
	request.get("http://pokeapi.co/api/v2/pokemon")
		.end((err, response)=>{
			if (err) {
				return reject(err);
			}
			return resolve(response);
		});
}

export function getPokemonByName(name, resolve, reject) {
	request.get(`http://pokeapi.co/api/v2/pokemon/${name}`)
		.end((err, response)=>{
			if (err) {
				return reject(err);
			}
			return resolve(response);
		});
}
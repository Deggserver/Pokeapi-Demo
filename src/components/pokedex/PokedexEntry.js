import React, { useState, useEffect } from 'react';

const MAX_POKEMON_ID = 898;

const PokedexEntry = (props) => {
    const [targetId, setTargetId] = useState(0)
    const [id, setId] = useState();
    const [name, setName] = useState("Press the button");

    const getPokemon = () => {
        return targetId === 0 ? ""
            : fetch(`https://pokeapi.co/api/v2/pokemon/${targetId}/`)
                .then(results => results.json())
                .then(data => {
                    const id = data.id;
                    const name = data.name[0].toUpperCase() + data.name.substring(1);
                    setId(id);
                    setName(name);
                })
                .catch((error) => {
                    console.error(error);
                });
    }

    useEffect(() => {
        getPokemon()
    }, [targetId]);

    const handlePokemonFetch = () => {
        setTargetId(Math.floor(Math.random() * MAX_POKEMON_ID))
        getPokemon();
    }

    return (
        <div className="bg-white p-3 m-3">
            <table className="table table-secondary">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td><img src={`sprites/pokemon/${targetId}.png`} alt={`This is a picture of ${name}`} /></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handlePokemonFetch} >Get random Pokemon</button>
        </div >
    )
}

export default PokedexEntry;
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setPokemonList(response.data)
        });
    }, []);

    return (
        <div className="container">
            {pokemonList.map((val, key) => {
                return (
                    <div key={key} className="card">
                        <div className="card-body">
                            <p><Link to={`/pokemon/${val.name}`}>{val.name}</Link></p>
                            <p>{(val.qty == null) ? 0 : val.qty}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

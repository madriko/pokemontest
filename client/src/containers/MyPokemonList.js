import React, {useState, useEffect} from 'react';
import Axios from 'axios';

export default function MyPokemonList() {
    const [myPokemonList, setMyPokemonList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getjoin').then((response) => {
            setMyPokemonList(response.data)
        });
    }, []);

    const deletePokemon = (pokemon) => {
        Axios.put("http://localhost:3001/api/update", {
            name: pokemon.name,
            qty: pokemon.qty,
            nickname: pokemon.nickname,
        });
        window.location.reload(true);
    };

    return (
        <div className="container">
            {myPokemonList.map((val, key) => {
                return (
                    <div key={key} className="card">
                        <div className="card-body">
                            <p>Name : {val.name}</p>
                            <p>Nickname : {val.nickname}</p>

                            {(val.status === 'active') ? 
                            
                                <button className="btn btn-sm btn-danger" onClick={() => {deletePokemon({nickname: val.nickname, name: val.name, qty: val.qty})}}>Remove</button>
                            
                            : null}
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

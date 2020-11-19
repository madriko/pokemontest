import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {GetPokemon} from '../actions/pokemonActions';
import Modal from './Modal';
import _ from 'lodash';
import Axios from 'axios';

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const pokemonState = useSelector(state => state.Pokemon);
    const [pokemonList, setPokemonList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const { register, handleSubmit } = useForm();
    const [count, setCount] = useState(0);
    const [nicknameStatus, setNicknameStatus] = useState("");

    React.useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, []);


    
    const ShowData = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokeData = pokemonState.data[pokemonName]
            return (
                <div className="pokemon">
                    <div className="img">
                        <img src={pokeData.sprites.front_default} alt=""/>
                        <img src={pokeData.sprites.back_default} alt=""/>
                    </div>
                    <div className="pokemonWrapper">
                        <div className="item">
                            <h4>Types</h4>
                            {pokeData.types.map((el, key) => {
                                return <p key={key}>{el.type.name}</p>
                            })}
                        </div>
                        <div className="item">
                            <h4>Abilities</h4>
                            {pokeData.abilities.map((el, key) => {
                                return <p key={key}>{el.ability.name}</p>
                            })}
                        </div>
                    </div>
                    <div className="pokemonWrapper">
                        <div className="item">
                            <h4>Stats</h4>
                            {pokeData.stats.map((el, key) => {
                                return <p key={key}>{el.stat.name} : {el.base_stat}</p>
                            })}
                        </div>
                        <div className="item">
                            <h4>Held Items</h4>
                            {pokeData.held_items.map((el, key) => {
                                return <p key={key}>{el.item.name}</p>
                            })}
                        </div>
                    </div>
                    <div className="pokemonWrapper">
                        <div className="item">
                            <h4>Moves</h4>
                            {pokeData.moves.map((el, key) => {
                                return <p key={key}>{el.move.name}</p>
                            })}
                        </div>
                        <div className="item">
                            <h4>Game Indices</h4>
                            {pokeData.game_indices.map((el, key) => {
                                return <p key={key}>{el.version.name} : {el.game_index}</p>
                            })}
                        </div>
                    </div>
                    
                </div>
            )
        }

        if (pokemonState.loading) {
            return <h1 className="loading">Loading...</h1>
        }

        if (pokemonState.errorMsg !== "") {
            return <p>{pokemonState.errorMsg}</p>
        }

        return <p>error getting pokemon</p>
    };
    
    const onSubmit = data => {
        Axios.post("http://localhost:3001/api/insert", {
            nickname: data.nickname, 
            id_pokemon: data.id_pokemon,
            name: data.name,
            qty: data.qty, 
        }).then((response) => {
            if (response.data.message) {
                setNicknameStatus(response.data.message)
            } 
        });
    };

    const addPokemonQty = (pokemon) => {
        Axios.get(`http://localhost:3001/api/get/${pokemon}`).then((response) => {
            setPokemonList(response.data)
        });
    };

    const ShowClick = () => {
        return count;
    };

    const ShowDataQty = () => {
        return (
            pokemonList.map((val) => {
                return val.qty + 1;
            })
        )
    };

    const ShowDataId = () => {
        return (
            pokemonList.map((val) => {
                return val.id;
            })
        )
    };

    return (
        <div className="container pokemonDetails">
            <div className="card">
                <div className="card-body">
                    <h2>{pokemonName}</h2>

                    <button 
                        className="btn btn-sm btn-warning" 
                        onClick={((ShowClick() % 2) === 1) ? () => [setIsOpen(true), addPokemonQty(pokemonName), setIsOpen2(false), setCount(count + 1)] : () => [setIsOpen(false), setIsOpen2(true), setCount(count + 1)]}>
                            Catch Pokemon
                    </button>

                    {((ShowClick() % 2) === 1) ? 
                    
                        <Modal open={isOpen2} onClose={() => setIsOpen2(false)}>
                            <p>Failed to Catch a Pokemon</p>
                        </Modal>
                    
                    :   <Modal open={isOpen} onClose={() => [setIsOpen(false), setNicknameStatus("")]}>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <p>Success</p>
                                    <input className="form-control modal-input" type="text" name="nickname" placeholder="Nickname" ref={register} />

                                    <p className="nicknameStatus">{nicknameStatus}</p>

                                    <input type="hidden" name="id_pokemon" defaultValue={ShowDataId()} ref={register} />

                                    <input type="hidden" name="name" defaultValue={pokemonName} ref={register} />

                                    <input type="hidden" name="qty" defaultValue={ShowDataQty()} ref={register} />
                                    
                                    <input type="submit" className="btn btn-primary modal-save" />
                                </form>
                                
                            </div>
                        </Modal> 
                    }
                    
                    {ShowData()}
                </div>
            </div>
        </div>
    )
}

export default Pokemon;
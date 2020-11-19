import React from 'react';
import './App.css';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import Footer from './containers/footer/Footer';
import PokemonList from './containers/PokemonList';
import MyPokemonList from './containers/MyPokemonList';
import Pokemon from './containers/Pokemon';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/pokemon"} exact component={PokemonList} />
        <Route path={"/mypokemonlist"} exact component={MyPokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

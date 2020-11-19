import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to={'/'}>Pokemon</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" to={`/pokemon`}>Pokemon List <span className="sr-only">(current)</span></Link>
        <Link className="nav-link" to={`/mypokemonlist`}>My Pokemon List</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
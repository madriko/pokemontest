import React from 'react';
import mainImage from '../assets/images/pokemon1.jpg';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="row">
        <div className="App-header">
            <img src={mainImage} alt="Pokemon List"/>
            <Link className="navbar-brand" to={'/pokemon'}>Pokemon List</Link>
        </div>
    </div>
)

export default Home;
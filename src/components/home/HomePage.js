import { getElementError } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import PokedexEntry from '../pokedex/PokedexEntry';



const HomePage = () => {
    return (
        <div className="bg-light p-3 m-3">
            <h1 className="display-4">Welcome to my Pokeapi demo</h1>
            <p className="lead">This is the landing page</p>
            <hr className="my-4" />
        </div>
    )
}

export default HomePage;
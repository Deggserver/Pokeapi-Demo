import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="container bg-primary">
            <NavLink className="text-dark" to="/" exact>Home</NavLink>
            {" | "}
            <NavLink className="text-dark" to="/pokedex" >Pokedex</NavLink>
            {" | "}
            <NavLink className="text-dark" to="/about" >About</NavLink>
        </nav>
    )
}

export default Header

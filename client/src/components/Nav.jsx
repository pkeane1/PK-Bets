import React from "react";



const Nav = () => {
    return (
        <nav className='navbar sticky-top navbar-expand-lg navbar-light'>
            <h1>
                <strong>PK Bets</strong>
            </h1>

            <ul className='nav ml-auto' id='nav'>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">login</a>
                </li>

            </ul>

        </nav>
    )
}

export default Nav;
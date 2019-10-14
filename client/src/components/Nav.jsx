import React from "react";



const Nav = () => {
    return (
        <nav className='navbar sticky-top navbar-expand-lg navbar-light'>
            <h1>
                <strong>PK Bets</strong>
            </h1>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Login</a>
      </div>
  </div>

        </nav>
    )
}

export default Nav;
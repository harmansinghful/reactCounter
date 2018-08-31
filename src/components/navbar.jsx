import React, { Component } from 'react';
console.log(Component);

//Stateless functional component - Can NOT use lifecycle hooks here

const NavBar = ({totalCounters}) => {
    console.log("Navbar - Rendered");
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand">
                <span style={ {color: "white"} }>Total Counters #</span> <span className="badge badge-success m-2 p-3">{totalCounters}</span>
            </a>
        </nav>
    );
}

// class NavBar extends Component {
//     render() { 
//     }
// }
 
export default NavBar;
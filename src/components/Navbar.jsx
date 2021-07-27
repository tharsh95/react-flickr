import React from 'react'

import './Navbar.css'

const Navbar = (props) => {
    

    return (
        <div>
            <div className="navbar">
                <div className="navHeader">Search Images</div>
                <div>
                    <input className="searchInput" type="text" name="photo" onChange={props.onChange} />
                    <button onClick={props.onClick} >Search</button>
                    
                </div>
                
            </div>

        </div>
    )
}

export default Navbar

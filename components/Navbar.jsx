import React from "react"
import logo from "../images/Meme_logo.png"

export default function Navbar(){
    return(
        <nav>
            <img 
                src={logo}
                className="meme_logo" 
                alt="" 
            />
            <span className="nav_title">Meme Maker</span>
        </nav>
    )
}
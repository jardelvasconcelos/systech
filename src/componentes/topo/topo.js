import React, { useState } from "react";
import "./topo.css"

export default function Topo() {


    const [openMenu, setOpenMenu] = useState(false);
    function aparecer() {
        setOpenMenu(!openMenu)
    }

    return (
        <header className="container-topo">
            <div className="container-logo">
                <a href="">
                    <img className="img-logo" src="assets/systech-op-3.png" alt="logo" />
                </a>
            </div>
            <div className="container-item-buttom ">
                <button onClick={aparecer} >
                    <div className="menu_burger"></div>
                    <div className="menu_burger"></div>
                    <div className="menu_burger"></div>
                </button>
            </div>
            <div className={openMenu ? 'dentro' : 'fora'}>
                <div className="teste"></div>
            </div>
            <nav className="container-link-topo">
                <a href="" className="link-topo"><strong>SOBRE</strong> </a>
                <a href="" className="link-topo"> <strong>SOLUÇÕES</strong> </a>
                <a href="" className="link-topo"><strong>CONTATOS</strong> </a>
            </nav>
            
        </header>


    )
} 
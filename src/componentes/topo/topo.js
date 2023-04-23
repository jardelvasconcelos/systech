import React, { useState } from "react";
import "./topo.css"

export default function Topo() {


    const [openMenu, setOpenMenu] = useState(false);
    function aparecer() {
        setOpenMenu(!openMenu)
    }

    return (
        <section>
            <header className="container-topo">
                <div className="container-logo">
                    <a href="">
                        <img className="img-logo" src="assets/systech-op-3.png" alt="logo" />
                    </a>
                </div>
                <div className="container-item-buttom ">
                    <button onClick={aparecer} className="menu-buttom">
                        <img className="menu-img-buttom" src="assets/contato.png" alt="" />
                        {/* <div className="menu_burger"></div>
                        <div className="menu_burger"></div>
                        <div className="menu_burger"></div> */}
                    </button>

                </div>
                <nav className="container-link-topo">
                    <a href="" className="link-topo"><strong>SOBRE</strong> </a>
                    <a href="" className="link-topo"> <strong>SOLUÇÕES</strong> </a>
                    <a href="" className="link-topo"><strong>CONTATOS</strong> </a>
                </nav>
            </header>
            <div className={openMenu ? 'dentro' : 'fora'}>
                <div className="teste"></div>
            </div>
        </section>


    )
} 
import React from "react";
import "./topo.css"

export default function Topo() {
    return (
        <header className="container-topo">
            <div className="container-logo">
                <a href="">
                    <img className="img-logo" src="assets/systech-op-3.png" alt="logo" />
                </a>
            </div>
            <nav className="container-link-topo">
                <a href="" className="link-topo"><strong>SOBRE</strong> </a>
                <a href="" className="link-topo"> <strong>SOLUÇÕES</strong> </a>
                <a href="" className="link-topo"><strong>CONTATOS</strong> </a>
            </nav>
        </header>
    )
}
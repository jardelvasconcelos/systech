import React from "react";
import "./topo.css"

export default function Topo() {
    return (
        <div className="container-topo">
            <div className="container-logo">
                <img className="img-logo" src="assets/fundo-preto.png" alt="logo" />
            </div>
            <nav className="container-link-topo">
                <a href="" className="link-topo"><strong>SOBRE</strong> </a>
                <a href="" className="link-topo"> <strong>SOLUÇÕES</strong> </a>
                <a href="" className="link-topo"><strong>CONTATOS</strong> </a>
            </nav>
        </div>
    )
}
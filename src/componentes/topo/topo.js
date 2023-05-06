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
                    <a href="#initial">
                        <img className="img-logo" src="assets/systech-op-3.png" alt="logo" />
                    </a>
                </div>
                <div className="container-item-buttom ">
                    <button onClick={aparecer} className="menu-buttom">
                        <img className="menu-img-buttom" src="assets/contato.png" alt="" />
                    </button>
                </div>
                <nav className="container-link-topo">
                    <a href="#sobre" className="link-topo"><strong>SOBRE</strong> </a>
                    <a href="#solucoes" className="link-topo"> <strong>SOLUÇÕES</strong> </a>
                    <button onClick={aparecer} className="link-topo-buttom"><strong>CONTATOS</strong></button>
                </nav>
            </header>
            <div className={openMenu ? 'dentro' : 'fora'}>
                <div className="container-footer-contato " >
                    <div className="container-endereco">
                        <h2 className="title-footer-contato">Endereço:</h2>
                        <p className="item-span">Ministro Gabriel Passos,89</p>
                        <p className="item-span">Guabirotuba-Curitiba-PR</p>
                    </div>
                    <div className="container-contato">
                        <h2 className="title-footer-contato">Entre em contato:</h2>
                        <div className="container-img-contato">
                            <a href="https://wa.me/5541992823679"> <img className="img-contato" src="assets/whatsapp.png" alt="whats" /></a>
                            <a href="mailto:luiz@systechengenharia.com.br"><img className="img-contato" src="assets/logotipo-do-gmail.png" alt="email" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
} 
import React from "react";
import "./conteudo.css";

export default function Conteudo() {
    return (
        <main>
            <section className="container-sobre">
                <div className="container-item-sobre">
                    <h1 className="item-sobre-title">Sobre a Systech</h1>
                    <h2 className="item-sobre-subtitle">Mollit velit ut cillum laboris culpa consequat deserunt et dolore nulla reprehenderit dolor. Non et cillum magna cupidatat .</h2>
                    <p className="item-sobre-text">Cillum deserunt tempor voluptate fugiat Lorem minim aliquip.
                        Tempor adipisicing ea veniam in officia voluptate elit pariatur aute reprehenderit sunt sit exercitation ad.
                        Magna duis ea et fugiat do ad elit id ea dolore officia et.
                        Ad laboris dolor esse commodo.
                        Adipisicing proident enim culpa voluptate esse nisi culpa.</p>
                </div>
                <div className="container-img-sobre">
                    <img className="img-item-sobre" src="assets/kuka01.jpg" alt="kuka01" />
                    {/*  <img className="img-item-sobre" src="" alt="" /> */}
                </div>
            </section>
            <section className="container-solucoes">

            </section>
        </main>
    )
}
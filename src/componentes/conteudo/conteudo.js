import React from "react";
import Soluction from "../card/soluction";
import "./conteudo.css";

export default function Conteudo() {
    return (
        <main>
            <section className="container-sobre">
                <div className="container-item-sobre">
                    <h1 className="item-sobre-title"><span className="span-item-sobre-title">Sobre a Systech</span></h1>
                    <h3 className="item-sobre-subtitle">
                    A Systech foi fundada em 2023 por Luiz , engenheiro elétrico que se dedicou a conhecer profundamente uma área de grande expansão, a robótica.
                    Percebendo a demanda crescente por serviços de manutenção de robôs em diversas indústrias decidiu unir forças para criar uma empresa especializada nesse segmento.</h3>
                    <p className="item-sobre-text">A Systech busca sempre aprimorar seus processos, oferecendo soluções cada vez mais eficientes e inovadoras. 
                    Com uma visão de futuro e uma equipe dedicada, temos tudo para se consolidar-nos como referência no mercado de manutenção robótica nos próximos anos.</p>
                </div>
                <div className="container-img-sobre">
                    <img className="img-item-sobre" src="assets/robo01.jpg" alt="kuka01" />
                </div>
            </section>
            <section className="container-solucoes">
                <div className="container-item-sobre">
                    <h1 className="item-sobre-title"><span className="span-item-sobre-title">Nossas Soluções</span></h1>
                    <h3 className="item-sobre-subtitle">
                        A Systech é especializada em fornecer soluções de manutenção para máquinas e equipamentos robóticos em diversas indústrias.
                        a empresa oferece serviços de manutenção preventiva e corretiva, diagnóstico de falhas e reparos em robôs industriais de diferentes fabricantes.

                        .</h3>
                    <p className="item-sobre-text">Oferecemos serviços de treinamento para operadores e técnicos, para que possam utilizar os equipamentos com segurança e eficiência. Com a manutenção robótica, os clientes podem ter a certeza de que seus equipamentos estão sempre em ótimo estado de funcionamento, o que garante a continuidade de suas operações e o sucesso de seus negócios.</p>
                </div>
                <Soluction />
            </section>
        </main>
    )
}
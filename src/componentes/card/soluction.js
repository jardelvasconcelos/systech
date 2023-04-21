import Card from './cardprops.js';

export default function Soluction() {
    return (
        <section className='container-card'>
            <Card
                icon="assets/painel-eletrico.jpg"
                coment="Montagem de painéis elétricos"
            />
            <Card
                icon="assets/kuka01.jpg"
                coment="Programação em robores"
            />
            <Card
                icon="assets/manutencao-eletrica.jpg"
                coment="Manutenção elétrica"
            />
        </section>
    )

}


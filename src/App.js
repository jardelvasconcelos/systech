import './App.css';
import Topo from './componentes/topo/topo';
import Capa from './componentes/capa/capa';
import Conteudo from './componentes/conteudo/conteudo';
import Footer from "./componentes/footer/footer";
import Soluction from './componentes/card/soluction';
function App() {
  return (
    <div className="App">
      <Topo/>
      <Capa/>
      <Conteudo/>
      <Soluction/>
      <Footer/>
    </div>
  );
}

export default App;

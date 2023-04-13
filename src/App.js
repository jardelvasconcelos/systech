import './App.css';
import Topo from './componentes/topo/topo';
import Capa from './componentes/capa/capa';
import Conteudo from './componentes/conteudo/conteudo';
import Footer from "./componentes/footer/footer";
function App() {
  return (
    <div className="App">
      <Topo/>
      <Capa/>
      <Conteudo/>
      <Footer/>
    </div>
  );
}

export default App;

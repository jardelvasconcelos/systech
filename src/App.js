import './App.css';
import Topo from './componentes/topo/topo';
import Capa from './componentes/capa/capa';
import Conteudo from './componentes/conteudo/conteudo';

function App() {
  return (
    <div className="App">
      <Topo/>
      <Capa/>
      <Conteudo/>
    </div>
  );
}

export default App;

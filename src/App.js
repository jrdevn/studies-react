import './App.css';
import RealMadrid from "./assets/real-madrid.png";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div>
      <h1>Avançando em react</h1>
      {/* Imagem em /public */}
      <img src="/spfc.jpg" alt="spfc"></img>
      {/*Imagem em src/assets */}
      <div>
        <img src={RealMadrid} alt="real Madrid" />
      </div>
      <ManageData />
      <ListRender/>
      <ConditionalRender/>
    </div>

  );
}

export default App;

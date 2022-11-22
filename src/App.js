import logo from './logo.svg';
import { MiComponente } from './componentes/MiComponente'
import './App.css';
import './componentes/App1.css';

function App() {
  const nombre1 = "Carmen";
  const nombre2 = "Magda";
  const nombre3 = "Jere";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MiComponente nombre={nombre1} obj={{nombre: "nombre"}}/>
      <MiComponente nombre={nombre2} />
      <MiComponente nombre={nombre3} />
      <MiComponente />
    </div>
  );
}

export default App;

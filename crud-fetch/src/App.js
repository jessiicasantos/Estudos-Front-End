import logo from './logo.svg';
import './App.css';

function App() {

  async function logMovies() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
        mode: "cors"
      });
      const movies = await response.json();
      console.log(movies);
      console.table(movies.species);
    } catch(error) {
      console.log(error); 
    }
  }

  logMovies().then();

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
    </div>
  );
}

export default App;

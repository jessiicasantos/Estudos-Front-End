import { useState, useEffect } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import Nav from './components/Nav/Nav';
import SinglePage from './components/SinglePage/SinglePage';
import Album from './components/Album/Album';

// draft
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));

const App = () => {
  const [data, setData] = useState(null);
  
  // async/await
  async function fetchData() {
    try {
      let response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/'
      );

      response = await response.data;
      // console.log(response);
      setData(response);
    } catch (err) {
      console.error('Errrroooo!!! ', err);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);
    
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Nav />
      <div className="data-wrapper">
        <SinglePage data={data} />
        <Album data={data} />
      </div>
    </ThemeProvider>
  )
}

export default App;

// steps:
// 1 - Usar um state pra salvar os dados
// 2 - Usar um effect para disparar o request pro back-end
// 3 - Usar async/await pra resolver o json do request
// 4 - Salvar o json do request no state do 1.

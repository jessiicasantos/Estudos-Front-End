import { useState, useEffect } from 'react';
import './App.css';

// draft
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response) => response.json())
// .then((json) => console.log(json));

const App = () => {
  const [data, setData] = useState(null);

  
  useEffect(() => {
    // async/await
    async function fetchData() {
      let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/'
      );
      response = await response.json()
      // console.log(response);
      setData(response);
    }

    fetchData()
  }, []);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App;

// steps:
// 1 - Usar um state pra salvar os dados
// 2 - Usar um effect para disparar o request pro back-end
// 3 - Usar async/await pra resolver o json do request
// 4 - Salvar o json do request no state do 1.

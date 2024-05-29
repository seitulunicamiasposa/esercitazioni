import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './component/button';
import Lista from './component/sidebar';
import TextArea from './component/areatesto';
import TNote from '../../ts-app/src/types/commontypes';
import { AppContext } from './providers/AppContext';

function App() {
  const [jsonData, setJsonData] = useState<TNote[]>()
  const [selectedNote, setSelectedNote] = useState<TNote>()

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => setJsonData(json))
  }, [])

  console.log(selectedNote)

  const testo = "Scrivi qui...";

  const [text, setText] = useState("");

  return (
    <AppContext.Provider value={{jsonData, setJsonData, selectedNote, setSelectedNote}}>
    <div className="App">
      <header className="App-header">
        <button>Bottone semplice</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      
      <TextArea contenuto={testo}/> 
      <Lista />
      <Button />
    
    </div>
    </AppContext.Provider>
  );
}

export default App;

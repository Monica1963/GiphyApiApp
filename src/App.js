// import React, {useState, useEffect} from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Giphys from './Components/Giphys';
import Search from './Components/Search';
import './App.css';

function App() {
  
  const [search, setSearch] = useState("");

  const handlerSearch = (value) => {
    setSearch(value);
  }
  
  return (
       
    <Container>
        <h1>Giphy API App</h1>
        <Search handlerSearch={handlerSearch}/>
       
          
        <Giphys search={search} />
         
        
       
       
    </Container>

  
  );
}

export default App;
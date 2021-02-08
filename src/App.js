// import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Giphys from './Components/Giphys';
import Search from './Components/Search';
import './App.css';

function App() {
  
  
  return (
   
          
    
    <Container>
        <h1>Giphys API App</h1>
        <Search />
        
        
        <Giphys />
       
    </Container>

  
  );
}

export default App;
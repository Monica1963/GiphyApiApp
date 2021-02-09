import React, { useState, useEffect } from 'react';

import { Row } from 'react-bootstrap';

import { useFetch } from "./../../customHooks/useFetch";
import Loading from './../Loading';
import Paginate from './../Paginate';
import Gif from './Gif';
import {enviroment} from './../../constants'


//Componente de lógica
const Giphys = ({search}) => {
  
  const  [url, setUrl] = useState(enviroment.ENDPOINT);

  useEffect ( () => {
    console.log("Busca:" , search);
    const searchUrl = !search ? enviroment.ENDPOINT : `${enviroment.ENDPOINTSEARCH}&q=${search}`; //SI HAY BUSQUEDA CAMBIA EL ENDPOINT 
    console.log(searchUrl);
    setUrl(searchUrl);
  }, [search]);

  const [info, fetching] = useFetch(url);
  const {data, pagination: pages} = info;
  
  const handlePages= (newUrl) => {
    if(!search){
      setUrl(`${enviroment.ENDPOINT}${newUrl}`);
    }else{
      setUrl(`${enviroment.ENDPOINTSEARCH}&q=${search}${newUrl}`);
    };
    
    console.log(url);
    
    
  }
    
    return (
      <> 
      <Paginate {...pages} handlePages ={handlePages} />
        <Row>
          {
            fetching ?
             (
              <Loading />
             )
            : (
              data.map((gif) => (
             <Gif key={gif.id} {...gif} />
           )) 
          )
        }
        </Row>
          
        </>
        
     );
}
 
export default Giphys;
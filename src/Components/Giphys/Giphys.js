import React, { useState } from 'react';

import { Row } from 'react-bootstrap';

import { useFetch } from "./../../customHooks/useFetch";
import Loading from './../Loading';
import Paginate from './../Paginate';
import Gif from './Gif';
import {enviroment} from './../../constants'


//Componente de lógica
const Giphys = () => {
  const  [url, setUrl] = useState(enviroment.ENDPOINT);
  const [info, fetching] = useFetch(url);
  const {data, pagination: pages} = info;
  
  const handlePages= (newUrl) => {

    setUrl(`${enviroment.ENDPOINT}${newUrl}`);
    console.log(url);
    //console.log(`empieza con count ${pages.count} y offset ${pages.offset}`);
    
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
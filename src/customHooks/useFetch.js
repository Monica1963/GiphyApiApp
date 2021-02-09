
import  { useEffect, useState } from 'react';
import {enviroment} from './../constants'


export const useFetch = (endpoint, initialState = []) => {


    const [rep, setData] = useState(initialState);
    const [fetching, setFetching] = useState(true);  //cargando//
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try{
          setFetching(true);
          const result = await fetch (`${enviroment.BASE_URL}/${endpoint}`); 
          const  rep = await result.json(); //  body 
          setData(rep); //array de gifs
          console.log(`hago fetch ${enviroment.BASE_URL}/${endpoint}`);
          //false cuando termina la petición
          setFetching(false);
  

        } catch (e) {
            
          setError(true);
          setFetching(false);
          setData(initialState);
          console.log(error);
        }
        
    
      };
      
      useEffect(() => {
        fetchData();
       
        // eslint-disable-next-line
      }, [endpoint]);
 
    return [rep, fetching, error];

};
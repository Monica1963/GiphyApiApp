import { useState } from 'react';
import { Row, Col, Button, Pagination } from 'react-bootstrap';
import { enviroment} from './../constants';

const Paginate = ({count, offset, handlePages}) => {

 
    //const [offSet, setOffset] = useState(enviroment.LIMIT);
    

    const handlerNext = () =>{
       console.log("voy a ir adelante");
              // setOffset(offSet + enviroment.LIMIT);
        // console.log(`aca va la suma ${offSet} + ${count}`);
        
        // console.log(`valgo ${offSet}`);
        const next = `${enviroment.OFFSET}${offset + count }`;
         console.log(`nextS  vale ${offset + count}`);
        handlePages(next);
       

    };

    const handlerPrev = () => {
        console.log("voy a ir para atras");
       
        //setOffset(offSet - enviroment.LIMIT);
        //console.log(`ahora vale ${offSet}`);
        //console.log(`atras vale ${offSet}`);
        const prev = `${enviroment.OFFSET}${offset - count}`;
    //    console.log(`prevS vale ${offSet}`);
    //    console.log(`prevs vale ${offset}`);
        handlePages(prev);
        console.log(prev);
    };

    const handlerReset = () => {
        const reset = `${enviroment.OFFSET}0`;
        handlePages(reset);
        console.log(reset);
    };
       
    return (
       
        <Row>
             <Col>

                <Pagination>
                
                    {offset > 0 && <Pagination.Prev onClick={handlerPrev} />}
                    <Button variant="success" onClick={handlerReset} >Reset</Button>
                    {offset < enviroment.MAX && <Pagination.Next onClick={handlerNext}/>}
                
                
                </Pagination>
        
             </Col>
                
        
        
        </Row>


    );
}

export default Paginate; 
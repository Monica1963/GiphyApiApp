import { useState } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import { enviroment} from './../constants';

const Paginate = ({count, offset, handlePages}) => {

 
    const [offSet, setOffset] = useState(enviroment.LIMIT);
    

    const handlerNext = () =>{
       console.log("voy a ir adelante");
               setOffset(offSet + enviroment.LIMIT);
        // console.log(`aca va la suma ${offSet} + ${count}`);
        
        // console.log(`valgo ${offSet}`);
        const next = `${enviroment.OFFSET}${offSet}`;
         console.log(`nextS  vale ${offSet}`);
        handlePages(next);
       

    };

    const handlerPrev = () => {
        console.log("voy a ir para atras");
       
        setOffset(offSet - enviroment.LIMIT);
        //console.log(`ahora vale ${offSet}`);
        console.log(`atras vale ${offSet}`);
        const prev = `${enviroment.OFFSET}${offSet}`;
    //    console.log(`prevS vale ${offSet}`);
    //    console.log(`prevs vale ${offset}`);
        handlePages(prev);
        console.log(prev);
    };
       
    return (
       
        <Row>
             <Col>

                <Pagination>
                
                    {offset > 0 && <Pagination.Prev onClick={handlerPrev} />}
<p>aflagfañg</p>
                    {offSet < enviroment.MAX && <Pagination.Next onClick={handlerNext}/>}
                
                
                </Pagination>
        
             </Col>
                
        
        
        </Row>


    );
}

export default Paginate; 

import { Row, Col, Button, Pagination } from 'react-bootstrap';
import { enviroment} from './../constants';

const Paginate = ({count, offset, handlePages}) => {

  
    

    const handlerNext = () =>{
       console.log("voy a ir adelante");
           
        const next = `${enviroment.OFFSET}${offset + count }`;
         console.log(`nextS  vale ${offset + count}`);
        handlePages(next);
       

    };

    const handlerPrev = () => {
        console.log("voy a ir para atras");
       
       
        const prev = `${enviroment.OFFSET}${offset - count}`;
  
   
        handlePages(prev);
        console.log(prev);
    };

    const handlerReset = () => {
        const reset = `${enviroment.OFFSET}0`;
        handlePages(reset);
        console.log(reset);
    };
       
    return (
       
        <Row > 
             <Col>

                <Pagination className="justify-content-center">
                
                    {offset > 0 && <Pagination.Prev onClick={handlerPrev} />}
                    <Button variant="success" onClick={handlerReset} >Reset</Button>
                    {offset < enviroment.MAX && <Pagination.Next onClick={handlerNext}/>}
                
                
                </Pagination>
        
             </Col>
                
        
        
        </Row>


    );
}

export default Paginate; 
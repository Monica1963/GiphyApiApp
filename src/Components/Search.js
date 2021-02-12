import {useState} from 'react';
import {Row, Col, Button, Form} from 'react-bootstrap';
 
const Search = ({handlerSearch}) => {

    const [gifs, setGifs] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();
        //console.log("dispare el enter");
        //if(gifs.trim() === "") return;
        handlerSearch(gifs);
    };

    const handlerInput = (e) => {
        setGifs(e.target.value);
        
    };

    return ( 
        <Row className="justify-content-center">
            <Col md={6}>
                <Form onSubmit={handlerSubmit}>
                    <Form.Group>

                        <Form.Control
                            type="text"
                            placeholder="Ingrese texto a buscar"
                            onChange={handlerInput}

                        />
                    </Form.Group>
                    <Button type="submit">Buscar</Button>
               
                </Form>
            </Col>
        </Row>

     );
}
 
export default Search;
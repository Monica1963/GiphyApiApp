import moment from 'moment';
import { Col, Card, Button} from 'react-bootstrap';

//Componente de presentación
const Gif = ({ title, images, import_datetime }) => {
    return ( 
        <Col md={4} className="mt-3 mb-3 text-center">
            <Card className="h-100">
                <Card.Img className="foto img-responsive" variant={"top"} src={images.preview_gif.url} /> 
               
                <Card.Body>
                    <Card.Title>
                        {title} 
                    </Card.Title>
                    <Card.Text>
                       <small> Fecha de creación: {moment(import_datetime).format("DD/MM/YYYY")}</small>
                    </Card.Text>
                    <Button type="button" variant="primary" block>
                        Ver más
                    </Button>
                </Card.Body>
             </Card>
        </Col>


     );
}
 
export default Gif;

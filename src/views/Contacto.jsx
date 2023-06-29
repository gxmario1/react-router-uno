import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (
    <div className='container p-5 col-auto bg-transparent'>    
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
        <Form.Text className="text-muted">
        Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button className='bg-dark text-white' variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>

  );
}

export default Contacto;
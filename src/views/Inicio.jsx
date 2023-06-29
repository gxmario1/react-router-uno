import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
  
    <Card className=" img bg-dark text-white mx-auto ">
      <Card.Img src="https://media.cnnchile.com/sites/4/2021/04/pexels-helena-lopes-2253275-800x400.jpg" alt="Card image" />
      <Card.ImgOverlay className='mx-auto'>
        <Card.Title>Adopta tu mascota 
          ahora!
        </Card.Title>
        <Card.Text>
        Busca al nuevo integrante de tu familia y adopta una mascota. Dale una nueva oportunidad y vida rescatando un animal, cuidándolo y protegiéndolo, dándoles el cariño que nunca han tenido.
        </Card.Text>
        <Card.Text>Mascotas en adopción</Card.Text>
      </Card.ImgOverlay>
    </Card>
  
  );
}

export default ImgOverlayExample;

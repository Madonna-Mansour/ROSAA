import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import on from '../img/im/img16.jpg'
import on1 from '../img/im/img19.jpg'
import on2 from '../img/im/img18.jpg'

function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      

      <Card style={{ width: '18rem' , textAlign:"center"}}>
      <Card.Img variant="top" src={on1}/>
      <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' , textAlign:"center"}}>
        <Card.Img variant="top" src={on}/>
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
          <Card.Text>
            Ergonomic lshth aljuuh
          </Card.Text>
           <h3>$27.58</h3>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' , textAlign:"center"}}>
      <Card.Img variant="top" src={on1}/>
      <Card.Body>
          <Card.Text>
            Ergonomic lshth aljuuh
          </Card.Text>
           <h3>$22.74</h3>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' , textAlign:"center"}}>
      <Card.Img variant="top" src={on2}/>
      <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
     

      
    </div>
  );
}

export default CardExample;
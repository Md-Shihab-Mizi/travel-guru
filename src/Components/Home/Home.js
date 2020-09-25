import React from 'react';
import Sundorban from '../../Image/sundorbon.png';
import Sajek from '../../Image/Sajek.png';
import Sreemongol from '../../Image/Sreemongol.png';
import { Button, Card, CardDeck} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    
        <CardDeck className="w-50 m-auto p-5">
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="fluid" src={Sundorban} />
  <Card.Body>
    <Card.Title>Sundorban</Card.Title>
   <a className="btn btn-primary" href="/sundorban">Show Details</a> 
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="fluid" src={Sajek} />
  <Card.Body>
    <Card.Title>Sajek</Card.Title>
    <a className="btn btn-primary" href="/sajek">Show Details</a>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="fluid" src={Sreemongol} />
  <Card.Body>
    <Card.Title>Sreemongol</Card.Title>
    <a className="btn btn-primary" href="/sreemongol">Show Details</a>
  </Card.Body>
</Card>
      </CardDeck>

    );
};

export default Home;
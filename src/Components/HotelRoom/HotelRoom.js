import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import Room1 from '../../Image/Rectangle 26.png';
import Room2 from '../../Image/Rectangle 27.png';
import Room3 from '../../Image/Rectangle 28.png';

const HotelRoom = () => {
    return (
        
        <CardDeck className="w-50 m-auto p-5">
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="fluid" src={Room1} />
  <Card.Body>
    <Card.Title>Super Delux</Card.Title>
    <Card.Text>
    Five-star amenities include a choice of at least two complimentary newspapers, offered and distributed, a welcome gift upon arrival, 24-hour room service, including hot food, and a thoughtful presentation during turndown service
    </Card.Text>
    <div onClick={() =>alert('Thanks For Your Booking')} className="btn btn-primary">Book Now</div> 
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="fluid" src={Room2} />
  <Card.Body>
    <Card.Title>Salmon</Card.Title>
    <Card.Text>
    Five-star amenities include a choice of at least two complimentary newspapers, offered and distributed, a welcome gift upon arrival, 24-hour room service, including hot food, and a thoughtful presentation during turndown service
    </Card.Text>
    <div onClick={() =>alert('Thanks For Your Booking')} className="btn btn-primary">Book Now</div>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="fluid" src={Room3} />
  <Card.Body>
    <Card.Title>Beach Sleep</Card.Title>
    <Card.Text>
    Five-star amenities include a choice of at least two complimentary newspapers, offered and distributed, a welcome gift upon arrival, 24-hour room service, including hot food, and a thoughtful presentation during turndown service
    </Card.Text>
    <div onClick={() =>alert('Thanks For Your Booking')} className="btn btn-primary">Book Now</div>
  </Card.Body>
</Card>
      </CardDeck>
        
    );
};

export default HotelRoom;
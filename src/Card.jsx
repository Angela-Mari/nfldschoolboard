import React from 'react';
import './Card.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = ({name, photo, bio, fblink}) => {
  
    console.log("Photo prop:", photo)
  return (
    <Col xs={12} sm={12} md={6} lg={6} xl={4} >
        <div style={{padding:"1rem"}}>
        <Row>
            <h3>{name}</h3>
        </Row>
        <Row style={{paddingBottom:".5rem"}}>
                    <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/facebook-new.png" alt="facebook-new"/>
                    <a href={fblink}>More on Facebook</a>
                </Row>
        <Row>
               
            <Col xs={12} sm={4} lg={3}>

                <Row style={{marginBottom:"1rem"}}>
                    <img src={photo} alt={name} className='candidate-photo'/>
                </Row>
            </Col>
            <Col xs={12} sm={8} lg={9} >
                {bio}
            </Col>
        </Row>
        </div>
    </Col>
  );
};

export default Card;
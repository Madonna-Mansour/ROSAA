import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import pag from '../img/im/img14.jpg'
import regolar from '../img/im/img16.jpg'
import saf from '../img/im/img27.jpg'
import perpl from '../img/im/img19.jpg'


const SlidSeven = () => {
  return (
    <div>
      <Container fluid>
          <Row className='seven'>
            <Col lg={3}>
               <img src={pag} alt="" />
               <h4>Small Leather Buty</h4>
               <p>$86.75</p>
            </Col>
            <Col lg={3}>
               <img src={regolar} alt="" />
               <h4>Small Leather Buty</h4>
               <p>$76.32</p>
            </Col>
            <Col lg={3}>
               <img src={saf} alt="" />
               <h4>Small Leather Buty</h4>
               <p>$55.7</p>
            </Col>
            <Col lg={3}>
               <img src={perpl} alt="" />
               <h4>Small Leather Buty</h4>
               <p>$96.75</p>
            </Col>
          </Row>
       
       </Container>
    </div>
  )
}

export default SlidSeven

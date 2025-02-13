import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import pri from '../img/im/img26.jpg'
const SlidSix = () => {
  return (
    <div>
      <Container fluid>
          <Row  >
            <Col className='backkk' lg={6}>
             <h4>Every day</h4>
             <h1>Same day Delvery Flowers & Gifts</h1>
             <button className='mb-5'>SHOP SAME DAY FLOWERS</button>
            </Col>
            <Col  lg={6}>
             <img src={pri} alt="" />   
            </Col>
          </Row>
       </Container>
    </div>
  )
}

export default SlidSix

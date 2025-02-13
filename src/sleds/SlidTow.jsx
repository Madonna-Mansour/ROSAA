import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import imm from '../img/im/img04.jpg'
import ab from '../img/im/img05.jpg'

const slid2 = () => {
  return (
    <div className='slid2  my-5 py-5'> 
        <Container fluid className='d-flex align-items-center '>
          <Row >
            <Col className='mx-4 my-5 ms-5 p-5' lg={4} sm={12}>
               <p style={{color:"gray"}}>WHO WE ARE</p>
                <h3 style={{fontSize:"50px", marginBottom:"40px"}}>
                    Online Flower Delivery Experts
                </h3>
                <p style={{color:"gray", marginBottom:"30px"}}>celebrate Mom With Beautiful Flowerscelebrate Mom With Beautiful Flowerscelebrate Mom With Beautiful Flowerscelebrate Mom With Beautiful Flowers.</p>
                <button>LEARN MORE</button>
            </Col>
            <Col  id='rela' className='d-flex justify-content-end' lg={7}>
                 <img  src={imm} alt="im" />
                 <img id='abs' src={ab} alt="" />
            </Col>
          </Row>
       </Container>
  </div>
  )
}

export default slid2

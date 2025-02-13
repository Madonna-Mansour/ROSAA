import React from 'react'
import { Container, Col,Row } from 'react-bootstrap'
import eat from '../img/im/img39.jpg'
import te from '../img/im/img40.jpg'

const SlidEliv = () => {
  return (
    <div>
        <Container fluid>
          <Row  className='end'>
              <Col id='re' lg={8} sm={12}>
                  <img style={{width:"100%", height:"750px",borderRadius:" 0 400px  0 0 "}} src={eat} alt="" />
                  <img id='ab'  src={te} alt="" />

              </Col>
              
            <Col  lg={4} sm={12} style={{marginTop:"170px"}} >
                  <h5 style={{color:"gray"}}>WHER TO FIND US</h5>
                  <h1 >VISIT OUR SHOP</h1>
                  <hr />
                  <Row>
                    <Col  lg={6}>
                        <h5>Rosaa Flower Shop</h5>
                        <p>972 Westheime</p>
                        <p>Rd.Santa Ana ,</p>
                        <p>lllinois,USA</p>
                        <br /><br /><br /><br />
                        <p>Mon-Sat:7.00am - 8.00pm</p>
                        <p>Sunday:8.00am - 6.00pm</p>
                    </Col>
                    <Col  lg={6}>
                       <p>Chat With us</p>
                       <h6>1-800-123-4567</h6>
                        <p>contact@example.com</p>
                       <button style={{marginBottom:"30px"}}>VIEW MAP</button>
                    </Col>
                  </Row>
             </Col>
            
          </Row>
       </Container>
    </div>
  )
}

export default SlidEliv
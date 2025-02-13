import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import pin from '../img/im/img07.jpg'
import wh from '../img/im/img08.jpg'
import n from '../img/im/img09.jpg'

const SlidThree = () => {
  return (
    <div>
      <Container fluid className='three'>
          <Row >
            <Col lg={5}>
             <img style={{borderRadius:"0 150px  0  150px ", height:"600px", width:"350px" , marginLeft:"150px"}} src={pin} alt="" />
            </Col>
            <Col className='my-5 py-5 text-center'  lg={2}>
                 <h3>Birthday</h3>
                 <h3>Congratulation</h3>
                 <h3>Birthday</h3>
                 <h3>Congratulation</h3>
                 <h3>Birthday</h3>
                 <h3>Congratulation</h3>
                 <h3>Birthday</h3>
                
            </Col>
            <Col   lg={5}>
                 <Row>
                    <Col lg={8} className='text-end'>
                    <img style={{borderRadius:" 70px  0 70px 0" , height:"430px" , width:"240px" , marginBottom:"30px"}} src={wh} alt="" />
                    </Col>
                    <Col lg={6} >
                    <img style={{borderRadius:" 0 0 80px 80px " , marginLeft:"140px"}} src={n} alt="" />
                    </Col>


                 </Row>
            </Col>
          </Row>
       </Container>
    </div>
  )
}

export default SlidThree

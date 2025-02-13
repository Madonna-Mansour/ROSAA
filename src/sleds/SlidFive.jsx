import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import gr from '../img/im/img21.jpg'
import pinkk from '../img/im/img22.jpg'
import pluee from '../img/im/img23.jpg'

const SlidFive = () => {
  return (
    <div>
     <Container fluid className='argee' >
          <Row >
            <Col lg={12}>
            <h4>DON'T MISS</h4>
            <h1>Shop Best Sellern</h1>
            </Col>
          </Row>
          <Row className='immmg'>
               <Col lg={4}>
                   <img src={gr} alt="" />
                   <h4>Classic acaollection</h4> <hr />
                </Col>
                <Col  lg={4}>
                   <img src={pinkk} alt="" />
                   <h4>Sprin acaollection</h4> <hr />
                </Col>
                <Col  lg={4}>
                   <img src={pluee} alt="" />
                   <h4>Growers acaollection</h4> <hr />
                </Col>
            </Row>
       </Container>

    </div>
  )
}

export default SlidFive
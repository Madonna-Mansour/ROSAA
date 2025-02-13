import React from 'react'
import { Container, Col,Row } from 'react-bootstrap'
import rosaa from'./img/im/img02.svg'
import face from'./img/facebook black.png'
import twi from'./img/twitter balck.png'
import ins from'./img/instagram black.png'

const Foot = () => {
  return (
    <div  className='foote'>
        <Container fluid style={{marginTop:"190px"}}>
          <Row >
            <Col lg={6}>
             <h1 className='pb-5 mb-5'>Want More? Sign Up For Discounts & Flower Tips!</h1>
            </Col>
            <Col  lg={6}>
                <input placeholder='your email....' style={{ width:"250px",color:"white",fontSize:"20px"}} type="text" />
                <button>SUBSCRIBE</button>
            </Col>
          </Row>
          <Row>
         
            <Col className='d mt-5' lg={3}>
            <div >
                <h5>INFORMATION</h5>
                <br /><b></b>
                <p>About</p>
                <p>Contact</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Privacy</p>
                <p>Rerms & conditions</p>
            </div>
            <div >
                <h5>HELP</h5>
                <br /><b></b>
                <p>About</p>
                <p>Contact</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Privacy</p>
                <p>Rerms & conditions</p>
            </div>
            </Col>
            <Col lg={6}>
            <div  className='social1'>
               <img src={rosaa} alt="" />
               <p style={{fontSize:"20px", marginTop:"20px"}}>Follow us on social media</p>
              <div className="social">
                  <img src={face} alt="" />
                  <img src={twi} alt="" />
                  <img src={ins} alt="" />
               </div>
            </div>
            </Col>
           
            <Col className='d' lg={3}>
            <div >
                <h5>INFORMATION</h5>
                <br /><b></b>
                <p>About</p>
                <p>Contact</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Privacy</p>
                <p>Rerms & conditions</p>
            </div>
            <div >
                <h5>HELP</h5>
                <br /><b></b>
                <p>About</p>
                <p>Contact</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Privacy</p>
                <p>Rerms & conditions</p>
            </div>
            </Col>
          </Row>
          <Row>
            <h5 style={{textAlign:"center", color:"gray"}}>Madonna Mansor 2025</h5>
          </Row>
       </Container>
    </div>
  )
}

export default Foot
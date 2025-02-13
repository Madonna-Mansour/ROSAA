import React from 'react'
import { Container, Col,Row } from 'react-bootstrap'
import on from '../img/im/img35.jpg'
import onth from '../img/im/img37.jpg'

const SlidTen = () => {
  return (
    <div className='threeeee '>
        <Container fluid className='m-5'>
           <Row >
            <Col lg={12}>
                <h4>TRENDING</h4>
                <h1>From The Blog</h1>
            </Col>
          </Row>
          <Row >
            <Col lg={4}>
                    <img src={on} alt="" />
                    <h5 style={{color:"pink", marginTop:"40px"}}><u>CATUSES </u>,<u> EXOTIC BLOOMS</u></h5>
                    <h2 style={{fontSize:"75", marginTop:"20px", width:"550px", textAlign:"center",marginLeft:"45px", justifyContent:"center", display:"flex"}}>The Best Places For Mother's Day Brunch In DC</h2>
                    <h6 style={{color:"gray" , marginBottom:"95px"}}>MAY 12, 2023 | POST BY ADIN</h6>
            </Col>
            <Col id='uniqe'  lg={4} style={{marginBottom:"95px"}}>
                 <Row>
                    <Col  lg={12}>
                    <h5 style={{color:"pink", marginTop:"40px", marginTop:"80%"}}><u>CATUSES </u>,<u> EXOTIC BLOOMS</u></h5>
                    <h2 style={{color:"white", fontSize:"75", marginTop:"20px", width:"550px", textAlign:"center",marginLeft:"45px", justifyContent:"center", display:"flex"}}>The Best Places For Mother's Day Brunch In DC</h2>
                    <h6 style={{color:"white", paddingBottom:"25px"}}>MAY 12, 2023 | POST BY ADIN</h6>
                    </Col>
                 </Row>
            
                 </Col>
            <Col  lg={4}>
            <img src={onth} alt="" />
            <h5 style={{color:"pink", marginTop:"40px"}}><u>CATUSES </u>,<u> EXOTIC BLOOMS</u></h5>
            <h2 style={{fontSize:"75", marginTop:"20px", width:"550px", textAlign:"center", justifyContent:"center", display:"flex",marginLeft:"45px"}}>The Best Places For Mother's Day Brunch In DC</h2>
            <h6 style={{color:"gray"}}>MAY 12, 2023 | POST BY ADIN</h6>
            
                </Col>
          </Row>
          <Row>
                    <Col className='buo'  lg={12}>
                        <button >VIEW ALLBLOG</button>
                    </Col>
                 </Row>
       </Container>
    </div>
  )
}

export default SlidTen
import React from 'react'
import { Container, Col,Row, Image } from 'react-bootstrap'
import star from '../img/im/star gold.png'
import famele from '../img/im/img33.jpg'
import alic from '../img/im/img34.jpg'
import f1 from '../img/f1.png'
import f2 from '../img/f2.png'
import f3 from '../img/f3.png'
import f4 from '../img/f4.png'


const SlidNighn = () => {
  return (
    <div className='total'>
        < Container fluid >
        <Row>
            <div className="absle d-flex">
                <Col lg={3} className='text-center' >
                <img src={f2} alt="" />
                <h2>A modern Approach</h2>
                <p>we pride ourselves on sourcing on - trend flowers</p>
               </Col>
               <Col lg={3} className='text-center'  id='only'>
               <img src={f1} alt="" />
                <h2>A modern Approach</h2>
                <p>we pride ourselves on sourcing on - trend flowers</p>
               </Col>
               <Col lg={3} className='text-center' >
               <img src={f3} alt="" />
                <h2>A modern Approach</h2>
                <p>we pride ourselves on sourcing on - trend flowers</p>
               </Col>
               <Col lg={3} className='text-center' id='only'>
               <img src={f4} alt="" />
                <h2>A modern Approach</h2>
                <p>we pride ourselves on sourcing on - trend flowers</p>
               </Col>
            </div>
            
        </Row>

            <Row>
                <Col lg={12} className="tone">
                   <h5 style={{color:"gray"}}>OUR PROMISE</h5>
                   <h1 style={{fontSize:"65px"}}>Happiness Delivary</h1>
                </Col>
           </Row>
           <Row>
                <Col lg={12} className="ttow text-center">
                    <button>LEARN MORE ABOUT US</button> 
                    <div className="stars ">
                    <img style={{height:"35px"}} src={star} alt="" />
                    <img style={{height:"35px"}} src={star} alt="" />
                    <img style={{height:"35px"}} src={star} alt="" />
                    <img style={{height:"35px"}} src={star} alt="" />
                    <img style={{height:"35px"}} src={star} alt="" />
                    
                    </div>
                     <h2 className='mb'>"Thank you so much for all of your help with our wedding flowers. You were able to create a bouquet that was more beautiful than I could have imagined."</h2>
                        <div className="pecther mt-5">
                               <Image style={{marginRight:"25px" , opacity:"0.5" , marginBottom:"20px"}} src={famele} roundedCircle />
                               <Image style={{marginRight:"25px" , marginBottom:"20px"}} src={alic} roundedCircle />
                               <Image style={{marginRight:"25px", opacity:"0.5", marginBottom:"20px"}} src={famele} roundedCircle />
                        </div>  
                        <h4 >Milton Whitny</h4>
                        <p> week ago</p>

                </Col>
              </Row>
        </Container>
    </div>
  )
}

export default SlidNighn
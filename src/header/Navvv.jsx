import React from 'react'
import { Container, Row , Col , NavDropdown} from 'react-bootstrap'
import Search from '../img/searsh.png'
import shopping from '../img/shopping.png'
import menu from '../img/menu.png'
import logo from '../img/im/img02.svg'


const Navv = () => {
  return (
    <div >
        <Container fluid  >
            <Row >
                <Col lg={4} sm={3} className='px-5'>
                     <div className='d-flex  mt-5'>
                        <img style={{width:"35px", height:"35px", marginRight:"10px"}} src={Search} alt="" />
                        <h3>Search</h3>
                     </div>
                </Col>
                <Col lg={4} sm={3} className='d-flex justify-content-center'>
                     <div className='d-flex  mt-5'>
                    <img  src={logo} alt="" />
                     </div>
                </Col>
                <Col lg={4} sm={6} className='d-flex justify-content-end px-5'>
                     <div className='d-flex  mt-5'>
                        <h3>My Account</h3>
                        <img style={{width:"35px", height:"35px", marginRight:"35px", marginLeft:"35px" }} src={shopping} alt="" />
                        <img style={{width:"35px", height:"35px", marginRight:"10px"}} src={menu} alt="" />

                     </div>
                </Col>
            </Row>
            <hr style={{width:"1300px",marginLeft:"20%" }}></hr>
            <Row>
              <Col lg={12}>
              <ul style={{display:"flex",justifyContent:"center" , listStyle:"none", margin:"10px"}}>
                  <li>
                    <div className='d-flex align-items-center mx-4'>
                    <p className='m-3' >HOME</p>
                    <NavDropdown > HOME</NavDropdown>
                    </div>
                   </li>
                   <li>
                   <div className='d-flex align-items-center mx-4'>
                   <p className='m-3' >SHOP</p>
                    <NavDropdown > SHOP</NavDropdown>
                    </div>
                   </li>
                   <li>
                   <div className='d-flex align-items-center mx-4'>
                   <p className='m-3' >PAGES</p>
                    <NavDropdown > PAGES</NavDropdown>
                    </div>
                   </li>
                   <li>
                   <div className='d-flex align-items-center mx-4'>
                   <p className='m-3' >BLOG</p>
                    <NavDropdown > BLOG</NavDropdown>
                    </div>
                   </li>
                   <li>
                   <div className='d-flex align-items-center mx-4'>
                   <p className='m-3' >CONTACT</p>
                    <NavDropdown > CONTACT</NavDropdown>
                    </div>
                   </li>
                </ul>
              </Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default Navv
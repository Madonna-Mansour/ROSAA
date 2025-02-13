import React from 'react'
import { Container, Row , Col,Navbar} from 'react-bootstrap'



function TextLinkExample() {
  return (
    <Navbar className="bg-dark px-5">
      <Container fluid >
        <Navbar.Brand href="#home"><h3 className='justy-f'><span className='envato'>envato</span> <span>maket</span></h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <a href="#login"><button>Bay now</button>
             </a>
          </Navbar.Text>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;



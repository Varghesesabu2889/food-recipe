import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
     <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAN_sTKMfqax-lfCMghtvnduZRwpGGd4LSUWOlgoAHKg&s"
              width="210"
              height="90"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h2 className='head2'>DishDiscover</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
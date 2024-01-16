import { Navbar, Container, Nav } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent

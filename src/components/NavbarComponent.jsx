import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css'; // Buatlah file CSS terpisah, misalnya NavbarComponent.css

const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <div className="navbar-brand-centered">
                        <Navbar.Brand>Challenge on Task</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;

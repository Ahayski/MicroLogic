import { CardGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div className='m-5'>
                <CardGroup className='flex gap-3 '>
                    <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,1.1)' }}>
                        <Card.Img variant="top" src="/images/Count-duration.png" alt="Count Duration" />
                        <Card.Body>
                            <Card.Title>Count Duration</Card.Title>
                            <Card.Text>
                                This game is a countdown game according to the date we choose
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to="/count-duration">
                                <Button variant="primary">Start Game</Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                    <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,1.1)' }}>
                        <Card.Img variant="top" src="/images/currency.jpg" alt="Currency Convert" />
                        <Card.Body>
                            <Card.Title>Currency Convert</Card.Title>
                            <Card.Text>
                                This game is a game about currency conversion
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to="/currency-convert">
                                <Button variant="primary">Start Game</Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                    <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,1.1)' }}>
                        <Card.Img variant="top" src="/images/ml.jpg" alt="Mobile Legend" />
                        <Card.Body>
                            <Card.Title>Mobile Legend</Card.Title>
                            <Card.Text>
                                This game is a search for information about heroes in the Mobile Legends game
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to="/mobile-legend">
                                <Button variant="primary">Start Game</Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default HomePage
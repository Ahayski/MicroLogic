import { CardGroup, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div className='m-5'>
                <CardGroup className='flex gap-3 '>
                    <Card>
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
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Currency Convert</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Start Game</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Mobile Legend</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Start Game</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default HomePage
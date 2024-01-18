import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Container, FormControl, InputGroup } from 'react-bootstrap';

const MobileLegend = () => {
    const [heroes, setHeroes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://api.dazelpro.com/mobile-legends/hero")
            .then((response) => {
                setHeroes(response.data.hero);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const handleSearch = () => {
        const result = heroes.filter(
            (hero) =>
                hero.hero_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                hero.hero_role.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResult(result);
    };

    const handleReset = () => {
        setSearchTerm("");
        setSearchResult([]);
    };

    return (
        <Container className="d-flex align-items-center justify-content-center mt-5" style={{ height: "100%" }}>
            <Card style={{ width: "30rem", boxShadow: '0 4px 8px rgba(0,0,0,1.1)' }}>
                <Card.Body className='text-center'>
                    <Card.Title>Mobile Legends Hero Search</Card.Title>
                    <InputGroup className="mb-3">
                        <FormControl
                            type="text"
                            placeholder="Masukkan nama hero atau role"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <Button onClick={handleSearch} variant="dark">Start</Button>
                        <Button onClick={handleReset} variant="dark">Reset</Button>

                    </InputGroup>

                    <div>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div>
                                {searchResult.length > 0 ? (
                                    <div>
                                        {searchResult.map((hero) => (
                                            <Card key={hero.hero_id} style={{ margin: "1rem" }}>
                                                <Card.Body>
                                                    <Card.Title>{hero.hero_name}</Card.Title>
                                                    <Card.Text>Role: {hero.hero_role}</Card.Text>
                                                    <Card.Text>Specially: {hero.hero_specially}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        {heroes.map((hero) => (
                                            <Card key={hero.hero_id} style={{ margin: "1rem" }}>
                                                <Card.Body>
                                                    <Card.Title>{hero.hero_name}</Card.Title>
                                                    <Card.Text>Role: {hero.hero_role}</Card.Text>
                                                    <Card.Text>Specially: {hero.hero_specially}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MobileLegend
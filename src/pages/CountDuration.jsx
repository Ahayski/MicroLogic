import { useState, useEffect } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import CountdownLogic from '../components/CountdownLogic';

const CountDuration = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [_defaultDate, setDefaultDate] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [error, setError] = useState('');

    // Fungsi untuk menangani perubahan tanggal pada input form
    const handleDateChange = (date) => {
        setError(''); // Reset pesan error saat tanggal berubah
        setSelectedDate(date);
    };

    // Fungsi untuk memulai permainan dan menetapkan tanggal awal sebagai default
    const handleStartGame = () => {
        if (!selectedDate) {
            setError('Masukkan tanggal terlebih dahulu'); // Set pesan error jika tanggal tidak diisi
        } else if (new Date(selectedDate).getTime() < Date.now()) {
            // Set pesan error jika waktu yang dipilih sudah lewat
            setError('Pilih waktu di masa depan, karena masa lalu sudah tidak bisa diulang kembali :(');
        } else {
            setGameStarted(true);
            setDefaultDate(_defaultDate);
        }
    };

    // Fungsi untuk mereset permainan
    const handleResetGame = () => {
        setGameStarted(false);
        setSelectedDate(null);
    };

    // Efek samping untuk mengatur nilai _defaultDate saat selectedDate berubah
    useEffect(() => {
        setDefaultDate(selectedDate);
    }, [selectedDate]);

    return (
        <div className="d-flex justify-content-center align-items-center pt-5">
            <Card style={{ width: '600px', height: '400px', boxShadow: '0 4px 8px rgba(0,0,0,1.1)' }}>
                <Card.Body>
                    <Card.Title>Game Countdown Duration</Card.Title>
                    <Form>
                        <Form.Group controlId="formStartDate" className='pb-4'>
                            <Form.Label>Start Date :</Form.Label>
                            {/* Input untuk memasukkan tanggal */}
                            <Form.Control type="datetime-local" value={selectedDate || ''} onChange={(e) => handleDateChange(e.target.value)} />
                        </Form.Group>

                        {/* Menampilkan pesan error jika ada */}
                        {error && <Alert variant="danger">{error}</Alert>}

                        {/* Tombol "Start" untuk memulai permainan */}
                        {!gameStarted ? (
                            <Button variant="primary" type="button" onClick={handleStartGame}>
                                Start
                            </Button>
                        ) : (
                            // Jika permainan sudah dimulai, tampilkan logika hitungan mundur dan tombol reset
                            <div>
                                <CountdownLogic startDate={selectedDate} />
                                <Button variant="danger" type="button" onClick={handleResetGame}>
                                    Reset
                                </Button>
                            </div>
                        )}
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CountDuration;

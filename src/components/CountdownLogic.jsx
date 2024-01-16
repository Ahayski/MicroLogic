import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const CountdownLogic = ({ startDate }) => {
    const [countdown, setCountdown] = useState(calculateCountdown(startDate));
    const [showResetButton, setShowResetButton] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const intervalId = setInterval(() => {
                setCountdown((prevCountdown) => {
                    if (prevCountdown <= 0) {
                        clearInterval(intervalId);
                        setShowResetButton(true); // Show reset button after countdown finishes
                        return 0;
                    }
                    return prevCountdown - 1000;
                });
            }, 1000);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [countdown]);

    const resetCountdown = () => {
        setCountdown(calculateCountdown(startDate));
        setShowResetButton(false);
    };

    function calculateCountdown(startDateString) {
        const targetDate = new Date(startDateString).getTime();
        const now = new Date().getTime();
        const timeDifference = targetDate - now;
        return timeDifference;
    }

    const formatTime = (milliseconds) => {
        const seconds = Math.floor(milliseconds / 1000) % 60;
        const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
        const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;
        const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

        return `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
    };

    return (
        <Card className='mb-4' style={{ width: '300px' }}>
            <Card.Body>
                {countdown > 0 ? (
                    <div>
                        <Card.Title>Countdown:</Card.Title>
                        <Card.Text>{formatTime(countdown)}</Card.Text>
                    </div>
                ) : (
                    showResetButton && (
                        <div>
                            <Card.Title>Hitungan Mundur Selesai!</Card.Title>
                            <Button variant="secondary" onClick={resetCountdown}>
                                Reset
                            </Button>
                        </div>
                    )
                )}
            </Card.Body>
        </Card>
    );
};

// Prop-types validation
CountdownLogic.propTypes = {
    startDate: PropTypes.string.isRequired,
};

export default CountdownLogic;

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const CountdownLogic = ({ startDate }) => {
    // State untuk menyimpan nilai countdown dan menentukan apakah tombol reset harus ditampilkan
    const [countdown, setCountdown] = useState(calculateCountdown(startDate));
    const [showResetButton, setShowResetButton] = useState(false);

    useEffect(() => {
        // Efek samping untuk mengatur interval countdown
        if (countdown > 0) {
            const intervalId = setInterval(() => {
                setCountdown((prevCountdown) => {
                    if (prevCountdown <= 0) {
                        clearInterval(intervalId);
                        setShowResetButton(true); // Tampilkan tombol reset setelah hitungan mundur selesai
                        return 0;
                    }
                    return prevCountdown - 1000;
                });
            }, 1000);

            // Membersihkan interval saat komponen dibongkar
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [countdown]);

    // Fungsi untuk mereset countdown ke nilai awal dan menyembunyikan tombol reset
    const resetCountdown = () => {
        setCountdown(calculateCountdown(startDate));
        setShowResetButton(false);
    };

    // Fungsi untuk menghitung selisih waktu antara startDate dan waktu sekarang
    function calculateCountdown(startDateString) {
        const targetDate = new Date(startDateString).getTime();
        const now = new Date().getTime();
        const timeDifference = targetDate - now;
        return timeDifference;
    }

    // Fungsi untuk memformat waktu dari milidetik menjadi format hari, jam, menit, dan detik
    const formatTime = (milliseconds) => {
        const seconds = Math.floor(milliseconds / 1000) % 60;
        const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
        const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;
        const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

        return `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
    };

    return (
        // Card untuk menampilkan countdown atau tombol reset
        <Card className='mb-4' style={{ width: '300px' }}>
            <Card.Body>
                {countdown > 0 ? (
                    // Tampilkan countdown jika masih berlangsung
                    <div>
                        <Card.Title>Countdown:</Card.Title>
                        <Card.Text>{formatTime(countdown)}</Card.Text>
                    </div>
                ) : (
                    // Tampilkan pesan hitungan mundur selesai dan tombol reset jika countdown sudah selesai
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

// Validasi prop-types untuk memastikan prop startDate bertipe string dan wajib ada
CountdownLogic.propTypes = {
    startDate: PropTypes.string.isRequired,
};

export default CountdownLogic;

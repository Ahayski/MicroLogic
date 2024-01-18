import { Box, Container, Grid, Typography } from '@mui/material';
import InputAmount from '../components/currency/InputAmount';
import SelectCountry from '../components/currency/SelectCountry';
import SwitchCurrency from '../components/currency/SwitchCurrency';
import { useContext, useEffect, useState } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import axios from 'axios';
import '../index.css'

const CurrencyConvert = () => {
    const {
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
    } = useContext(CurrencyContext);

    const [resultCurrency, setResultCurrency] = useState(0);
    const codeFromCurrency = fromCurrency.split(" ")[0];
    const codeToCurrency = toCurrency.split(" ")[0];

    useEffect(() => {
        if (firstAmount) {
            axios("https://api.freecurrencyapi.com/v1/latest", {
                params: {
                    apikey: import.meta.env.VITE_API_KEY,
                    base_currency: codeFromCurrency,
                    currencies: codeToCurrency
                }
            })
                .then(response => setResultCurrency(response.data.data[codeToCurrency]))
                .catch(error => {
                    console.error("Error fetching exchange rate:", error);
                    // Handle error, misalnya set state untuk menampilkan pesan error ke pengguna
                });
        }
    }, [firstAmount, fromCurrency, toCurrency, codeFromCurrency, codeToCurrency]);


    return (
        <Container maxWidth="md" sx={boxStyles}>
            <Typography variant='h5' sx={{ marginTop: "2rem", marginBottom: "2rem" }}>
                Stay Ahead with Accurate Conversions
            </Typography>
            <Grid container spacing={2}>
                <InputAmount />
                <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" />
                <SwitchCurrency />
                <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" />
            </Grid>
            {firstAmount ? (
                <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
                    <Typography>{firstAmount} {fromCurrency} =</Typography>
                    <Typography variant='h5' sx={{ marginTop: "5px", fontWeight: "bold" }}>
                        {resultCurrency * firstAmount} {toCurrency}
                    </Typography>
                </Box>
            ) : (
                // Tambahkan indikator loading atau pesan menunggu jika diperlukan
                <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
                    <Typography>Waiting for amount...</Typography>
                </Box>
            )}
        </Container>
    );
};

// Styles untuk kotak container
const boxStyles = {
    background: "#fdfdfd",
    marginTop: "3rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0 4px 8px rgba(0,0,0,1.1)",
    position: "relative"
};

export default CurrencyConvert;

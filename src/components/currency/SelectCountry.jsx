import PropTypes from 'prop-types';
import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material";
import useAxios from "../../hooks/useAxios";

const SelectCountry = (props) => {
    const { value, setValue, label } = props;
    const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");

    if (loaded) {
        return (
            <Grid item xs="12" md={3}>
                <Skeleton variant="rounded" height={60} />
            </Grid>
        );
    }

    if (error) {
        return "Something went wrong";
    }

    const dataFilter = data.filter(item => "currencies" in item);
    const dataCountries = dataFilter.map(item => {
        return `${Object.keys(item.currencies)[0]} - ${item.name.common}`;
    });

    return (
        <Grid item xs="12" md={3}>
            <Autocomplete
                value={value}
                disableClearable
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                options={dataCountries}
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        </Grid>
    );
};

SelectCountry.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default SelectCountry;

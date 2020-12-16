import {useEffect, useState} from "react";
import CountrySelectComponent from "../components/CountrySelectComponent"
import CountryDetailsComponent from "../components/CountryDetailsComponent";
import FavouritesComponent from "../components/FavouritesComponent";



const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountryName, setSelectedCountryName] = useState("");

    const getCountries = () => {
        //console.log("Getting Countries");
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setCountries(data);
        })
    };

    useEffect(() => {
        getCountries();
    }, []);

    const getSelectedCountryName = (countryName) => { 

        setSelectedCountryName(countryName);

    } 

    const country = countries.find((country) => {

        return country.name === selectedCountryName;
            
    });

    console.log("Selected country object is:", country);

    if( !countries ) return null;

    return (
        <>
        <h1>Countries</h1>
        <CountrySelectComponent countriesData={countries} getSelectedCountryName={getSelectedCountryName}/>
        <CountryDetailsComponent countryDetails={country} />

        </>
    )


}

    



export default CountriesContainer;
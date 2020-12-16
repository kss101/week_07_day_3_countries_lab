import {useEffect, useState} from "react";
import CountrySelectComponent from "../components/CountrySelectComponent"
import FavouritesComponent from "../components/FavouritesComponent";



const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);

    const getCountries = () => {
        console.log("Getting COuntries");
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

    if( !countries ) return null;

    return (
        <>
        <h1>Countries</h1>
            {/* <CountrySelectComponent countriesData={countries}/> */}
        </>
    )


}

    



export default CountriesContainer;
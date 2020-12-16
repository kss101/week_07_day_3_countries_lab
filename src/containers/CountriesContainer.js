import {useEffect, useState} from "react";
//import CountriesContainer from "./containers/CountriesContainer"



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
        <h1>Countries</h1>
    )


}

    



export default CountriesContainer;
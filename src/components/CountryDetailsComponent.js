const CountryDetails = ({countryDetails}) => {
    if (!countryDetails) return null; // this is the line we needed to stop undefined from ruining our day
    return(
        <>
            <h2>{countryDetails.name}</h2>
            <img src={countryDetails.flag} />
            <h2>Capital City: {countryDetails.capital}</h2>
            <h3>Current Population: {countryDetails.population}</h3>
        </>
    )

}

export default CountryDetails;
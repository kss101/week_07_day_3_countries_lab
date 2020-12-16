const CountryDetails = ({countryDetails}) => {

    return(
        <>
        <h2>{countryDetails.name}</h2>
        <img src={countryDetails.flag} />
        </>
    )

}

export default CountryDetails;
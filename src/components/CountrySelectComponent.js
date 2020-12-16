

const CountrySelect = ({countriesData, getSelectedCountryName}) => {

    const countrySelectNodes = countriesData.map((country) => {

        return(
            <option value={country.name}>{country.name}</option>
        )
    
    })

    const handleChange = (event) => {

        getSelectedCountryName(event.target.value)

    }

    return(
        <>  
            <select onChange={handleChange}>
                {countrySelectNodes}
            </select>

        </>
    )
}

export default CountrySelect
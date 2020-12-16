import CountryDetailsComponent from "./CountryDetailsComponent";

const CountrySelect = ({countriesData}) => {

    const countryNodes = countriesData.map((country, index) => {

        let name = country.name;
        let flag = country.flag;
        let key = index;

        return(
            <CountryDetailsComponent name={name} flag={flag} key={key} />
        )
    })

    return(
        <>  
            <select>
                {countryNodes}
            </select>
        </>
    )
}

export default CountrySelect
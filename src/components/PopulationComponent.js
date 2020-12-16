import {useState} from 'react';

const PopulationComponent = ({countriesData}) => {
    let total = 0;

    const countriesPopulation = countriesData.map((country)=>{

        return total += country.population;

    });



    return (

            <h5>Current world total population is {total}... and growing.</h5>

    );
};

export default PopulationComponent;
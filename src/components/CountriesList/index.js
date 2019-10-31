import React from 'react';
import { Grid, Country, CountryInformation, Flag, CountryName, CountryLabel, CountrySpan } from './index.styles';

function CountriesList() {
  const arrayCountries = [
    {
      "name": "Germany",
      "capital": "Berlin",
      "region": "Europe",
      "population": 81770900,
      "flag": "https://restcountries.eu/data/deu.svg",
    },
    {
      "name": "United States of America",
      "capital": "Washington, D.C.",
      "region": "Americas",
      "population": 323947000,
      "flag": "https://restcountries.eu/data/usa.svg",
    },
    {
      "name": "Brazil",
      "capital": "Brasília",
      "region": "Americas",
      "population": 206135893,
      "flag": "https://restcountries.eu/data/bra.svg",
    },
    {
      "name": "Iceland",
      "capital": "Reykjavík",
      "region": "Europe",
      "population": 334300,
      "flag": "https://restcountries.eu/data/isl.svg",
    }
  ]

  const renderCountry = (country, index) => {
    console.log(country)
    return (
      <Country key={index} >
        <Flag src={country.flag} />
        <CountryInformation>
          <CountryName>{country.name}</CountryName>
          <CountryLabel>Population: <CountrySpan>{country.population}</CountrySpan></CountryLabel>
          <CountryLabel>Region: <CountrySpan>{country.region}</CountrySpan></CountryLabel>
          <CountryLabel>Capital: <CountrySpan>{country.capital}</CountrySpan></CountryLabel>
        </CountryInformation>
      </Country>
    )
  }
  

  return (
    <Grid>
      { arrayCountries.map(renderCountry) }
    </Grid>
  );
}

export default CountriesList;

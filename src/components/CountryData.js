import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { Breakpoints } from "../styles/Breakpoints";

const CountryFlag = styled.img`
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  margin-bottom: 40px;

  @media (min-width: ${Breakpoints.large}) {
    margin-bottom: 0px;
  }
`;

const CountryTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 24px;
  @media (min-width: ${Breakpoints.large}) {
    grid-column: 1 / 3;
  }
`;

const CountryInfo = styled.div`
  @media (min-width: ${Breakpoints.large}) {
    display: grid;
    grid-column-gap: 20px;
    margin-left: 60px;
  }
`;

const CountryInfoList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  span {
    font-weight: 600;
  }
  @media (min-width: ${Breakpoints.large}) {
    margin-right: 90px;
  }
`;

const BorderCountries = styled.div`
  h3 {
    margin-bottom: 30px;
    font-size: 15px;
  }

  a {
    margin-right: 16px;
  }
  @media (min-width: ${Breakpoints.large}) {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
  }
`;

const StyledCountryData = styled.div`
  margin-top: 40px;

  @media (min-width: ${Breakpoints.large}) {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function CountryData({ country }) {
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = country;

  return (
    <StyledCountryData>
      <CountryFlag src={flag} alt={`flag for ${name}`} />
      <CountryInfo>
        <CountryTitle>{name}</CountryTitle>
        <CountryInfoList>
          <li>
            <span>Native name: </span> {nativeName}
          </li>
          <li>
            <span>Population: </span>
            {population && population.toLocaleString()}
          </li>
          <li>
            <span>Region: </span> {region}
          </li>
          <li>
            <span>Sub region: </span> {subregion}
          </li>
          <li>
            <span>Capital: </span> {capital}
          </li>
        </CountryInfoList>
        <CountryInfoList>
          <li>
            <span>Top level domain: </span> {topLevelDomain}
          </li>
          <li>
            <span>Currencies: </span>
            {currencies && currencies.map(currency => currency.name).join(", ")}
          </li>
          <li>
            <span>Languages: </span>
            {languages && languages.map(language => language.name).join(", ")}
          </li>
        </CountryInfoList>
        <BorderCountries>
          <h3>Border Countries: </h3>
          {borders &&
            borders.splice(0, 3).map(country => (
              <Link key={country} to={`/country/${country}`}>
                <Button text={country} />
              </Link>
            ))}
        </BorderCountries>
      </CountryInfo>
    </StyledCountryData>
  );
}

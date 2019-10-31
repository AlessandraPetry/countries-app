import styled from 'styled-components'
import { colors } from '../Shared/constants'

export const Grid = styled.div`
    display: inline-grid;
    grid-template-columns: 22% 22% 22% 22%;
    grid-column-gap: 4%;
    grid-row-gap: 4%;
    margin: 60px 0;
    padding: 0 4%;
    width: 100%;
`

export const Country = styled.div`
    background: ${ colors.white };
    border-radius: 6px;
    box-shadow: 1px 1px 10px -4PX ${ colors.dark_input };
    justify-self: center;
    width: 100%;
`

export const Flag = styled.div`
    background-image: url(${ props => props.src });
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    min-height: 200px;
    width: 100%;   
`

export const CountryInformation = styled.div`
    padding: 30px;
`

export const CountryName = styled.h3`
    padding-bottom: 20px;

    text-align: left;
`

export const CountryLabel = styled.p`
    display: flex;
    padding: 0;

    color: ${ colors.dark_text };
    font-family: 20px;
    font-weight:600;
    line-height: 28px;
    text-align: left;
`

export const CountrySpan = styled.span`
    padding-left: 10px;

    color: ${ colors.dark_input };
    font-family: 20px;
    font-weight:300;
    text-align: left;
`

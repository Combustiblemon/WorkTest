import styled from "styled-components";
import { lightBeige, lighterBeige, lightGray } from "./colors";

export const AppStyled = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

export const Search = styled.span`
    display: flex;
    justify-content: center;
`

export const Results = styled.span`
    padding-top: 15px;
    font-size: 20px;
    font-weight: 500;
`

export const Wrapper = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    border: 2px solid ${lightBeige};
    border-top: none;
    box-shadow: 0px 0px 5px 5px ${lightGray};
    background-color: ${lighterBeige};

    height: 100%;
    min-width: 800px;
`

export const PreviousSearch = styled.h3`
    margin-bottom: 5px;
    font-size: 14px;
`

export const Header = styled.div`
    margin: 20px;
    margin-top: 0px;
    padding-top: 10px;
    padding-bottom: 15px;
    font-size: 25px;
    font-weight: 700;
    width: 100%;
    background-color: rgb(245, 229, 208);
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    letter-spacing: 1px;

    border-bottom: 2px solid ${lightGray};
    border-radius: 3px;
    box-shadow: 0px 0px 6px 2px ${lightGray};

    display: flex;
    justify-content: center;
`
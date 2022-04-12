import styled from "styled-components";

export const Wrapper = styled.ol`
    border: 2px solid black;
    border-radius: 4px;
    padding: 10px;
    list-style-type: none;
    background-color: rgb(104, 124, 156);
    margin: 0px;
    box-shadow: 0px 0px 2px 2px gray;
`

export const Result = styled.a`
    text-decoration: none;
    border: 1px solid gray;
    border-radius: 4px;
    color: black;
    padding: 5px;
    background-color: white;

    display: flex;
    gap: 5px;
    align-items: center;
    box-shadow: 0px 0px 2px 2px black inset;

    :hover {
        background-color: rgb(250, 235, 215);
    }

    :active {
        background-color: rgb(250, 212, 162);
    }
`

export const Position = styled.span`
    font-size: 14px;
    font-weight: 500;
`

export const Text = styled.span``
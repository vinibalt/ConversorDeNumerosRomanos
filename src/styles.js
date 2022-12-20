import styled from "styled-components";

export const Container = styled.div`
    width: auto;
    height: auto;
    background-color: #fafafa;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #fff;
    width: 60%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 60%;
`

    export const Img = styled.img`
    width: 30px;
    height: 30px;
    margin: 0 2rem;
    padding: .25rem;
    align-self: center;
    justify-content: center;
`

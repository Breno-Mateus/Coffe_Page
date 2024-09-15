import styled from "styled-components";

export const MenuSection = styled.section`
    padding: 3rem 2rem;
    margin: 0 auto;
    width: 70rem;
`

export const Title = styled.h2`
    font-size: 2rem;
    color: #d3ad7f;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 2rem;
`

export const TitleDecoration = styled.span`
    color: #fff;
    text-transform: uppercase;
`

export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1.5rem;
`
import styled from "styled-components";
import Image from "../../assets/home-img.jpg"

export const MainDiv = styled.div`
    background: url(${Image});
    height: 100vh;
    background-position: center;
    background-size: cover;
`

export const MainSection = styled.section`
    padding: 3rem 2rem;
    margin: 0 auto;
    max-width: 70rem;
    
    display: flex;
    align-items: center;
    min-height: 100vh;
`

export const Content = styled.div`
    max-width: 60rem;
`

export const Title = styled.h3`
    color: #fff;
    font-size: 2rem;
`

export const Text = styled.p`
    color: #fff;
    font-size: 1rem;
    font-weight: 100;
    line-height: 1.8;
    padding: 1rem 0;
`

export const Button = styled.a`
    background-color: #d3ad7f;
    color: #fff;
    padding: 1rem 3rem;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
`
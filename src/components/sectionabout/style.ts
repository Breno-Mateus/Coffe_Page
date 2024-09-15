import styled from "styled-components";

export const AboutSection = styled.section`
    padding: 3rem 2rem;
    margin: 0 auto;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

export const Row = styled.div`
    max-width: 66rem;

    display: flex;
    align-items: center;
    background-color: #13131a;
    gap: 1.5rem;
`
export const ContainerImage = styled.div`
    display: flex;
`

export const Content = styled.div`
    padding: 2rem;
`
export const TitleContent = styled.h3`
    font-size: 1.5rem;
    color: #fff;
`

export const Text = styled.p`
    font-size: .9rem;
    color: #fff;
    padding: 1rem 0;
    line-height: 1.5;
`

export const Image = styled.img`
   height: 100%;
`
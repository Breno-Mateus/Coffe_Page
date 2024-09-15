import styled from "styled-components";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export const SpacenHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
    background-color: #010103;
`

export const SectionHeader = styled.section`
    padding: 3rem 2rem;
    margin: 0 auto;
    max-width: 70rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: .5rem;
    padding-bottom: .5rem;
`

export const LinksPage = styled.a`
    margin: 0 1rem;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #d3ad7f;
        border-bottom: 0.1rem solid #d3ad7f;
        padding-bottom: 0.5rem;
        font-size: 1.2rem;
    }
`

export const Image = styled.img`
    
`

export const DivIcons = styled.div`

`

export const IconSearch = styled(FaSearch)`
    margin: 1rem;
    cursor: pointer;
    color: #fff;
    width: 1rem;
    height: 1rem;

    &:hover {
        width: 1.5rem;
        height: 1.5rem;
    }

`

export const IconCart = styled(FaShoppingCart)`
    margin: 1rem;
    cursor: pointer;
    color: #fff;
    width: 1rem;
    height: 1rem;

    &:hover {
        width: 1.2rem;
        height: 1.2rem;
    }

`
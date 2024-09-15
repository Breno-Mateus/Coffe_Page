import styled from "styled-components";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const SectionFooter = styled.section`
    padding: 3rem 2rem;
    margin: 0 auto;
    width: 70rem;
`

export const Share = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

export const Instagram = styled(FaInstagram)`
    font-size: 30px;
    cursor: pointer;
    color: #fff;
    border-radius: 50%;
   
`
export const Facebook = styled(FaFacebookSquare)`
    font-size: 30px;
    cursor: pointer;
    color: #fff;
`
export const Twitter = styled(FaTwitter)`
    font-size: 30px;
    cursor: pointer;
    color: #fff;
`

export const DivLinks = styled.div`
    border-radius: 50%;
    padding: .5rem;
    margin: .3rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #d3ad7f;
    }
`
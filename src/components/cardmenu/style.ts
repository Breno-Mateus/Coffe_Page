import styled from "styled-components";
import { ButtonStyle } from "../button/style";

export const Image = styled.img`
    height: 5rem;
`

export const Title = styled.h3`
    color: #fff;
    font-size: 1rem;
    padding: 1rem 0;
`

export const Price = styled.div`
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem 0;
`

export const PriceDecoration = styled.span`
    font-size: .8rem;
    text-decoration: line-through;
    font-weight: lighter;
`

export const Card = styled.div`
    text-align: center;
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    padding: 3rem;
    cursor: pointer;

    &:hover{
        background-color: #fff;

        ${Title} {
            color: #13131a;
        }

        ${Price} {
            color: #13131a;
        }

        ${ButtonStyle} {
            color: #13131a;
        }
    }
`
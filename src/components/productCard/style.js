import styled from "styled-components";
import { colors } from "../../components/styles/colors";

export const ProductCardContainer = styled.div`
    height: 444px;
    width: 386px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover{
        transition: ease-in-out 0.8s;
        filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        border-radius: 10px;
    }
`

export const CardImage = styled.img`
    margin: 0 auto;
    padding-top: 16px;
    border-radius: 10px;
`

export const ProductText = styled.div`
    align-self: flex-start;
    padding: 30px 10px;

    & > h5{
        font-size: 18px;
        font-weight: 500;
    }
`
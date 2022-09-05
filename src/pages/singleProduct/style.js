import styled from "styled-components";
import { colors } from "../../components/styles/colors";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: ${colors.primary}; */
  border: 1px solid red;

`;

export const ProductImages = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between ;
`
export const LargeImage = styled.img`
    margin-left: 50px;
    height: 510px;
    transition: transform .5s ease;

    &:hover{
        transform: scale(1.13);
    }
`

export const TheThree = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60%;

    & img{
        height: 80px;
        width: 80px;
        transition: transform .5s ease;

        &:hover{
        transform: scale(1.13);
    }
    }
`

export const ProductVariants = styled.aside`

`
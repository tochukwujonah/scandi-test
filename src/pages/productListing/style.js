
import styled from "styled-components";
import { colors } from "../../components/styles/colors";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1250px;
  width: 100%;
  padding: 30px;
  /* background-color: ${colors.primary}; */
  /* border: 1px solid red; */

  &>div{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  &>h2{
    margin-top: 20px;
    margin-bottom: 100px;
  }
`;
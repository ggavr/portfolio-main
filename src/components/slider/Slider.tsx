import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem*10</Text>
                    <Name>BBBB</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>

        </StyledSlider>
    );
};
const StyledSlider = styled.div`
    display: flex;
  flex-direction: column;
`
const Slide = styled.div`
  max-width: 540px;
  text-align: center;
  border:1px solid red;
`
const Text = styled.p`

`
const Name = styled.span`

`
const Pagination = styled.div`
span{
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 5px;
  background-color: coral;
  
}
`


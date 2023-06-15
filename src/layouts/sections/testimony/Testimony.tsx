import React from 'react';
import styled from "styled-components";
import {TitleSection} from "../../../components/TitleSection";
import {Icons} from "../../../components/Icons";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <TitleSection>Testimony</TitleSection>
            <FlexWrapper direction='column' align='center'>
                <Icons iconId='git'/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`
  background-color: azure;
`


import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./Skill";
import {TitleSection} from "../../../components/TitleSection";

export const Skills = () => {
    return (
        <StyledSkills>
            <TitleSection> Title </TitleSection>
                <FlexWrapper wrap='wrap' justify='space-between'>
                <Skill iconId={'react'} iconTitle='react'/>
                <Skill iconId={'sass'} iconTitle='react'/>
                <Skill iconId={'html'} iconTitle='react'/>
                </FlexWrapper>

        </StyledSkills>
    );
};
const StyledSkills = styled.section`
  min-height: 100vh;
  background-color: aliceblue;
`

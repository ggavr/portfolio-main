import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./Skill";
import {TitleSection} from "../../../components/TitleSection";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <TitleSection>My Skills</TitleSection>
                <FlexWrapper wrap='wrap' justify='space-around'>
                <Skill iconId={'react'} iconTitle='react'/>
                <Skill iconId={'sass'} iconTitle='react'/>
                <Skill iconId={'html'} iconTitle='react'/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
`

import React from 'react';
import {Icons} from "../../../components/Icons";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

type PropsType = {
    iconId: string
    iconTitle: string
}
export const Skill = ({iconId, iconTitle}: PropsType) => {
    return (
        <StyledSkill>

            <IconWrapper>
                <FlexWrapper direction='column' align='center'>
                    <Icons iconId={iconId}/>
                    <SkillTitle>{iconTitle}</SkillTitle>
                </FlexWrapper>
            </IconWrapper>

        </StyledSkill>
    );
};
const StyledSkill = styled.div`
  padding: 10px;


`
const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    width: 80px;
    height: 80px;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
    
  }
`
const SkillTitle = styled.small`
  text-align: center;
  text-transform: uppercase;
`

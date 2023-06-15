import React from 'react';
import {Icons} from "../../../components/Icons";
import styled from "styled-components";

type PropsType = {
    iconId:string
    iconTitle: string
}
export const Skill = ({iconId, iconTitle}:PropsType) => {
    return (
        <StyledSkill>
            <Icons iconId={iconId}/>
            <SkillTitle>{iconTitle}</SkillTitle>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
  width: 20%;
  margin: 10px;
  padding: 10px;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SkillTitle = styled.p`
  text-align: center;
`

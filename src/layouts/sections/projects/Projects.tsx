import React from 'react';
import {TitleSection} from "../../../components/TitleSection";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";
import {Menu} from "../../../components/Menu";
import imgOne from '../../../assets/images/project1.webp'

const items = ["Instagram", "TodoList"]
export const Projects = () => {
    return (
        <StyledProjects>
            <TitleSection>Projects</TitleSection>
            <Menu menuItems={items}/>
            <FlexWrapper justify='space-around' wrap='wrap'>
                {items.map((item, i) => {
                    return <Project
                        key={i}
                        imgSrc={imgOne}
                        projectTitle={item}
                    />
                })}
            </FlexWrapper>
        </StyledProjects>
    );
};
const StyledProjects = styled.section`
  background-color: azure;
  min-height: 100vh;

`


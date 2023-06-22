import React from 'react';
import {TitleSection} from "../../../components/TitleSection";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./Project";
import {Menu} from "../../../components/Menu";
import imgOne from '../../../assets/images/project1.webp'
import {Container} from "../../../components/Container";

const items = ["Instagram", "TodoList"]
export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <TitleSection>Projects</TitleSection>
                <Menu menuItems={items}/>
                <FlexWrapper justify='space-between' wrap='wrap'>
                    {items.map((item, i) => {
                        return <Project
                            key={i}
                            imgSrc={imgOne}
                            projectTitle={item}
                            description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                        />
                    })}
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};
const StyledProjects = styled.section`
  background-color: azure;
  min-height: 100vh;

`


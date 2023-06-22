import React from 'react';
import avatar from 'assets/images/user-image-1.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <div>
                    <span>Hi there</span>
                    <Name>I am <span>Gavriil Gimervert</span> </Name>
                    <span>Frontend Developer</span>
                </div>
                <StyledPhoto src={avatar} alt='avatar'/>
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
`
const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const Name = styled.h2`
margin: 10px 0;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  
  span{
    position: relative;
    z-index: 0;
    
    &::before{
      z-index: -1;
      position: absolute;
      bottom: 0;
      content:'';
      display: inline-block;
      width: 100%;
      height: 15px;
      background-color: ${theme.colors.accent};
    }
  }
`

import React from 'react';
import avatar from 'assets/images/user-image-1.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi there</span>
                    <h2>I am Gavriil Gimervert</h2>
                    <span>Frontend Developer</span>
                </div>
                <StyledPhoto src={avatar} alt='avatar'/>
            </FlexWrapper>
        </StyledMain>
    );
};
const StyledMain = styled.section`
  min-height: 100vh;
`
const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

import React from 'react';
import styled from "styled-components";

type PropsType = {
    children: string
}
export const TitleSection = ({children}: PropsType) => {
    return (
        <StyledTitleSection>
            {children}
        </StyledTitleSection>
    );
};
const StyledTitleSection = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 26px;
  letter-spacing: 3px;
  margin-bottom: 90px;
`
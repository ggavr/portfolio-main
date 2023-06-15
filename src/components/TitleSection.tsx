import React from 'react';
import styled from "styled-components";
type PropsType = {
    children: string
}
export const TitleSection = ({children}:PropsType) => {
    return (
        <StyledTitleSection>
            <span>{children}</span>
        </StyledTitleSection>
    );
};
const StyledTitleSection = styled.h2`
text-align: center;
`
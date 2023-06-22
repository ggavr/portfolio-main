import React from 'react';
import {usePagePercent} from "../assets/hooks/usePagePercent";
import styled from "styled-components";
import {theme} from "../styles/Theme";

export const ReadProgress = () => {
    const percent = usePagePercent()
    return (
        <Styled style={{width: `${percent}%`}}>

        </Styled>
    );
};
const Styled = styled.div`
  height: 3px;
  background: ${theme.colors.accent};
  display: block;
  position: fixed;
  top: 0;
  left: 0;
`

import React from 'react';
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledNav>
            <ul>
                {props.menuItems.map((item, i) => {
                    return <li key={i}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>
        </StyledNav>
    );
};
const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`
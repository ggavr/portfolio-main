import React from 'react';
import styled from "styled-components";
import {Logo} from "components/Logo";
import {Menu} from "../../components/Menu";

const items = ['Home', "Skills", "Projects", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
  background-color: aliceblue;
  display: flex;
  justify-content: space-between;
`
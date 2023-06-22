import React from 'react';
import styled from "styled-components";
import {Logo} from "components/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {HeaderMenu} from "./HeaderMenu";
import {ReadProgress} from "../../components/ReadProgress";

const items = ['Home', "Skills", "Projects", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align='center' justify='space-between'>
                    <Logo/>
                    <ReadProgress/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`
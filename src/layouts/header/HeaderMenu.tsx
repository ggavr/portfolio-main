import React from 'react';
import styled from "styled-components";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledNav>
            <List>
                {props.menuItems.map((item, i) => {
                    return <Item key={i}>
                        <Link href="">{item}</Link>
                    </Item>
                })}
            </List>
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
const List = styled.ul`
    
`
const Item = styled.li`
    

`
const Link = styled.a`
  &:hover{
    color: white;
  }
`
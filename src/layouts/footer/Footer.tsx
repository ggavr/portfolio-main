import styled from "styled-components";
import {Icons} from "../../components/Icons";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column' align='center'>
            <Name>Gavriil</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icons iconId='git' height='21px' width='21px'/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>@ 2023 Gavriil Gimervert, All rights reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
min-height: 30vh;
`
const Name = styled.span`
text-align: center;
`
const SocialList = styled.ul`
    display: flex;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
`
const Copyright = styled.small`

`


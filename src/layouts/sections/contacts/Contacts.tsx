import styled from "styled-components";
import {TitleSection} from "../../../components/TitleSection";
import {MyButton} from "../../../components/MyButton";

export const Contacts = () => {
    return (
        <StyledContacts>
            <TitleSection>Contact</TitleSection>
            <StForm>
                <StField/>
                <StField/>
                <StField as='textarea'/>
                <MyButton type='submit'>Send message</MyButton>
            </StForm>
        </StyledContacts>
    );
};
const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: yellow;
`
const StForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`
const StField = styled.input`
`



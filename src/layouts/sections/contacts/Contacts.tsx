import styled from "styled-components";
import {TitleSection} from "../../../components/TitleSection";
import {MyButton} from "../../../components/MyButton";
import {Container} from "../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
            <TitleSection>Contact</TitleSection>
            <StForm>
                <StField/>
                <StField/>
                <StField as='textarea'/>
                <MyButton type='submit'>Send message</MyButton>
            </StForm>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11970.601995484207!2d2.170418907812508!3d41.40339589999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3210230d687%3A0x47dd0b77cd51d072!2z0J_Qu9C-0YnQsNC00Ywg0JrQsNGC0LDQu9C-0L3RgdC60L7QuSDRgdC70LDQstGL!5e0!3m2!1sru!2ses!4v1686909359869!5m2!1sru!2ses"
                width="540"
                height="350"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </Container>
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



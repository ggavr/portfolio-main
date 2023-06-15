import React from 'react';
import styled from "styled-components";
import image from '../assets/images/project1.webp'

const Card = () => {
    return (
        <StyledCard>
            <StyledImage/>
            <BtnBox>
                <MyBtn>Save</MyBtn>
                <MyBtnTransparent>See more</MyBtnTransparent>
            </BtnBox>

        </StyledCard>
    );
};

export default Card;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 350px;
  background: #FFFFFF;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 0 auto;
`
const StyledImage = styled.image`
  width: 280px;
  height: 170px;
  background: url("https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1687737600&Signature=Auj9SQ4ipEKbEt6VGt2QyERV8dGsU1fPdB~2Q8mSabDkpZkqyDdvgBU4j17lkYqQ-3aEgZQ5Wbq0A4Krz0OqE~Xll4U4d0Haq--n37Y6aA4juZAhAu23lO3R6sgDibWE~I8-E4KqsKwmRI8chXgh~w~ENglRXDBpsTut2F3Mp2Wal0p5dtdwzouuNutziIpPyfYyIteI4FGfIyri8irSo~b8ah189RfrdDMpgrl98HFO4mwvzPosWfOsvdKN7ESNxTc~BBaiIjaJTtsb1XIBuzOWzm2MI2~9yt1t~jryo8B94unCKDGRmLefuYUR5ySLderEPVXKjDBvOwqRink1vw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
  border-radius: 10px;
  margin: 10px;
`
const BtnBox = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin: 20px;
`
const MyBtn = styled.button`
  width: 86px;
  height: 30px;
  background: #4E71FE;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  &:hover{
    background: teal;
  }
`
const MyBtnTransparent = styled(MyBtn)`
  background: none;
  border: 2px solid #4E71FE;
  color: #4E71FE;
`

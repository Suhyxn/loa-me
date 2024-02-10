import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../api/index";
import { Characters } from "../types";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Profile from "../components/Profile";

const Base = styled.div``;

const Container = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const Advertisement = styled.div`
  width: 20%;
`;

const ContentContainer = styled.div`
  width: 60%;
  background-color: #ffffff;
`;

const Engravings = styled.div``;

const EngravingContainer = styled.div``;

const EngravingImage = styled.img`
  width: 46px;
  height: 46px;
  background-color: #000000;
  color: #ffffff;
`;

const EngravingLevel = styled.small`
  color: #ffffff;
  padding-right: 0.25rem;
  padding-left: 0.2rem;
`;

const EngravingContent = styled.span`
  letter-spacing: -1.5px;
`;

const jewels = styled.div``;

type Params = {
  id: string;
};

function DetailPage() {
  const { id } = useParams<Params>();
  console.log(id);
  const characterResult = useRecoilValue(getCharacter(id));
  console.log(characterResult);

  return (
    <Base>
      <div>DetailPage id:{id}</div>
      <div>{id}</div>
      <div>{}</div>
      <Container>
        <Advertisement></Advertisement>
        <ContentContainer>
          <div>
            <Profile />
            <Engravings>
              <EngravingContainer>
                <EngravingImage />
                <EngravingLevel>3</EngravingLevel>
                <EngravingContent>긱인 내용</EngravingContent>
              </EngravingContainer>
              <div>보석</div>
            </Engravings>
            <div>
              <div>메뉴바</div>
              <div>장비</div>
              <div>카드</div>
              <div>특성</div>
            </div>
          </div>
        </ContentContainer>
        <Advertisement></Advertisement>
      </Container>
    </Base>
  );
}

export default DetailPage;

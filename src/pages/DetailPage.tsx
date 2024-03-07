import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../api/index";
import { Characters } from "../types";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Profile from "../components/Profile";
import Engraving from "../components/Engraving";
import Gem from "../components/Gem";

const Base = styled.div``;

const Container = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const Advertisement = styled.div`
  width: 20%;
`;

const ContentContainer = styled.div`
  width: 40%;
  background-color: #ffffff;
`;

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
      <Container>
        <Advertisement></Advertisement>
        <ContentContainer>
          <div>
            <Profile />
            <Engraving />
            <Gem />
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

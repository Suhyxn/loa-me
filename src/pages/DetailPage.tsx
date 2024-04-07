import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../api/index";
import { Characters } from "../types";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import Profile from "../components/Profile";
import Engraving from "../components/Engraving";
import Gem from "../components/Gem";
import Tabs from "../components/Tabs";

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
  background-color: #15181d;
`;

type Params = {
  id: string;
};

type Tab = "ability" | "skills" | "collections";

function DetailPage() {
  const { id } = useParams<Params>();
  const characterResult = useRecoilValue(getCharacter(id));

  const [selectedTab, setSelectedTab] = useState<Tab>("ability");

  const TabClick = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <Base>
      <div>DetailPage id:{id}</div>
      <div>{id}</div>
      <Container>
        <Advertisement></Advertisement>
        <ContentContainer>
          <Profile />
          <Engraving />
          <Gem />
        </ContentContainer>
        <ContentContainer>
          <Tabs tab={selectedTab} onClick={TabClick} />
          {selectedTab === "ability" && <>Ability</>}
          {selectedTab === "skills" && <>Skills</>}
          {selectedTab === "collections" && <>Collections</>}
        </ContentContainer>
        <Advertisement></Advertisement>
      </Container>
    </Base>
  );
}

export default DetailPage;

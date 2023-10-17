import React from "react";
import styled from "styled-components";

import SearchArea from "../components/SearchArea";

const Base = styled.div``;

const LogoContainer = styled.div`
  width: 40rem;
  height: 16rem;
  margin: auto;
  margin-top: 12rem;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  margin-top: 4rem;
  height: 5.4rem;
`;

const Advertisement = styled.div`
  width: 20%;
`;

const ContentContainer = styled.div`
  width: 60%;
`;

function IndexPage() {
  return (
    <Base>
      <LogoContainer>
        <LogoImage src="/assets/loame-logo.png" />
      </LogoContainer>
      <Container>
        <Advertisement></Advertisement>
        <ContentContainer>
          <SearchArea />
        </ContentContainer>
        <Advertisement></Advertisement>
      </Container>
    </Base>
  );
}

export default IndexPage;

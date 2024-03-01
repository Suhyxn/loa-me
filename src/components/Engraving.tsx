import React from "react";
import styled from "styled-components";

const Engravings = styled.div`
  padding: 0 0.5rem;
  margin: 0;
  background-color: #15181d;
`;

const EngravingContainer = styled.div`
  text-align: left;
  padding: 0.25rem 0;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: -1px;
  white-space: nowrap;
`;

const EngravingImage = styled.img.attrs({
  src: "https://cdn-lostark.game.onstove.com/efui_iconatlas/ability/ability_278.png",
})`
  width: 46px;
  height: 46px;
  color: #ffffff;
  border-radius: 3rem;
`;

const EngravingLevel = styled.small<{ englevel?: string }>`
  font-size: 13px;
  border-style: solid;
  border-width: thin;
  color: #ffffff;
  background-color: ${(props) =>
    props.englevel?.includes("3")
      ? "#c17502;"
      : props.englevel?.includes("2")
      ? "#8500b2"
      : "#0091cc;"};
  border-color: ${(props) =>
    props.englevel?.includes("3")
      ? "#c17502;"
      : props.englevel?.includes("2")
      ? "#8500b2"
      : "#0091cc;"};
  padding-right: 0.25rem;
  padding-left: 0.2rem;
  border-radius: 0.375rem;
`;

const EngravingContent = styled.span`
  font-size: 14px;
  letter-spacing: -1.5px;
  padding-left: 0.2rem;
`;

function Engraving() {
  const engraving: string = "수라의 길 Lv. 3";
  return (
    <Engravings>
      <EngravingContainer>
        <EngravingImage />
        &nbsp;
        <EngravingLevel englevel="각인 3">3</EngravingLevel>
        <EngravingContent>각인 내용</EngravingContent>
      </EngravingContainer>
      <EngravingContainer>
        <EngravingImage />
        &nbsp;
        <EngravingLevel englevel="각인 3">3</EngravingLevel>
        <EngravingContent>각인 내용</EngravingContent>
      </EngravingContainer>
      <EngravingContainer>
        <EngravingImage />
        &nbsp;
        <EngravingLevel englevel="각인 3">3</EngravingLevel>
        <EngravingContent>각인 내용</EngravingContent>
      </EngravingContainer>
      <EngravingContainer>
        <EngravingImage />
        &nbsp;
        <EngravingLevel englevel="각인 1">1</EngravingLevel>
        <EngravingContent>
          {" "}
          {engraving
            .replace("Lv.", "")
            .replace("3", "")
            .replace("2", "")
            .replace("1", "")}
        </EngravingContent>
      </EngravingContainer>
      <EngravingContainer>
        <EngravingImage />
        &nbsp;
        <EngravingLevel englevel="각인 2">2</EngravingLevel>
        <EngravingContent>
          {" "}
          {engraving
            .replace("Lv.", "")
            .replace("3", "")
            .replace("2", "")
            .replace("1", "")}
        </EngravingContent>
      </EngravingContainer>
      <EngravingContainer>
        <EngravingImage />
        &nbsp;
        <EngravingLevel englevel="각인 3">3</EngravingLevel>
        <EngravingContent>
          {engraving
            .replace("Lv.", "")
            .replace("3", "")
            .replace("2", "")
            .replace("1", "")}
        </EngravingContent>
      </EngravingContainer>
    </Engravings>
  );
}

export default Engraving;

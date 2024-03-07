import React, { useState } from "react";
import styled from "styled-components";

const Gems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0.25rem 0;
  border-radius: 0.25rem;
  justify-content: flex-start;
  background: #000000;
  box-sizing: border-box;
`;

const GemContainer = styled.div`
  position: relative;
  margin: 0px 0.25rem;
  width: calc(9.09090909% - 0.5rem);
`;

const GemImage = styled.img.attrs({
  src: "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_9_62.png",
})`
  background: linear-gradient(135deg, #362003, #9e5f04);
  padding: 0 !important;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  max-width: 100%;
  height: auto;
`;

const GemLevel = styled.div`
  position: absolute;
  bottom: -4px;
  right: -2px;
`;

const GemLevelImage = styled.img.attrs({
  // src: "https://static.loawa.com/stone/p9.png",
})`
  width: 20px;
  height: auto;
  padding: 0 !important;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
`;

function Gem() {
  const [level, useLevel] = useState(7);

  return (
    <Gems>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
      <GemContainer>
        <GemImage />
        <GemLevel>
          <GemLevelImage src={`/assets/loame-gem${level}.png`} />
        </GemLevel>
      </GemContainer>
    </Gems>
  );
}

export default Gem;

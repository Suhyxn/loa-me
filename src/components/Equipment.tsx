import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0.375rem;
  background: 000000;
  flex-wrap: wrap;
`;

const ContentBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  flex: 0 0 auto;
`;

const ContentImageFigure = styled.figure`
  margin: 0;
  position: relative;
  padding-bottom: 10px;
  flex-shrink: 0;
  box-sizing: border-box;
`;

const AncientImage = styled.img.attrs({
  src: "https://cdn-lostark.game.onstove.com/efui_iconatlas/fbm_m_item/fbm_m_item_141.png",
})`
  background: linear-gradient(135deg, #3d3325, #dcc999);
  padding: 0;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  max-width: 100%;
  height: auto;
`;

const ContentTextFigure = styled.figure`
  margin: 0;
  position: relative;
  padding-bottom: 0;
  flex-shrink: 0;
  box-sizing: border-box;
`;

const EquipmentTextBox = styled.div`
  color: #ffffff;
`;

const EquipmentTextH4 = styled.h4`
  font-size: 13px;
  line-height: 140%;
  font-weight: 700;
  margin-left: 4px;
  width: 86px;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const EquipmentTextH5 = styled.h5`
  font-size: 13px;
  line-height: 140%;
  margin-left: 8px;
  opacity: 0.9;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const EquipmentSpan = styled.span`
  letter-spacing: -1px;
`;

const EquipmentEsLevel = styled.small`
  display: inline-block;
  width: 7px;
  height: 14px;
  font-size: 0.875em;
  font-weight: 500;
  border-style: solid;
  border-width: thin;
  color: #000000;
  border-color: #ffffff;
  background: #ffffff;
  padding-right: 0.25rem;
  padding-left: 0.2rem;
  border-radius: 0.375rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  text-align: center;
`;

const AccessoryTextH4 = styled.h4`
  font-size: 12px;
  font-weight: 700;
  margin-left: 4px;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const AccessoryTextH5 = styled.h5`
  font-size: 12px;
  margin-top: 0;
  margin-left: 8px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  opacity: 0.9;
`;

const AccessoryEgLevel = styled.small`
  color: #000000;
  border-color: #ffffff;
  background: #ffffff;
  padding-right: 0.3rem;
  padding-left: 0.2rem;
  border-radius: 0.4rem;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  line-height: 1.3;
`;

function Equipment() {
  return (
    <ContentContainer>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH4>
              <EquipmentSpan>
                +18고대
                <br />
                <span>초월2</span>
              </EquipmentSpan>
              사멸
            </EquipmentTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH5>
              <span style={{ letterSpacing: "-1px", lineHeight: "140%" }}>
                <EquipmentEsLevel>1</EquipmentEsLevel>
                공격력
                <br />
                <EquipmentEsLevel>4</EquipmentEsLevel>힘
              </span>
            </EquipmentTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox style={{ width: "65px" }}>
            <AccessoryTextH4>고대</AccessoryTextH4>
            <AccessoryTextH4>
              치명 + 477
              <br />
              특화 +494
            </AccessoryTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <AccessoryTextH5>
              <EquipmentSpan>
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
                <br />
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
                <br />
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
              </EquipmentSpan>
            </AccessoryTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH4>
              <EquipmentSpan>
                +18고대
                <br />
                <span>초월2</span>
              </EquipmentSpan>
              사멸
            </EquipmentTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH5>
              <span style={{ letterSpacing: "-1px", lineHeight: "140%" }}>
                <EquipmentEsLevel>1</EquipmentEsLevel>
                공격력
                <br />
                <EquipmentEsLevel>4</EquipmentEsLevel>힘
              </span>
            </EquipmentTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox style={{ width: "65px" }}>
            <AccessoryTextH4>고대</AccessoryTextH4>
            <AccessoryTextH4>
              치명 + 477
              <br />
              특화 +494
            </AccessoryTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <AccessoryTextH5>
              <EquipmentSpan>
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
                <br />
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
                <br />
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
              </EquipmentSpan>
            </AccessoryTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH4>
              <EquipmentSpan>
                +18고대
                <br />
                <span>초월2</span>
              </EquipmentSpan>
              사멸
            </EquipmentTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH5>
              <span style={{ letterSpacing: "-1px", lineHeight: "140%" }}>
                <EquipmentEsLevel>1</EquipmentEsLevel>
                공격력
                <br />
                <EquipmentEsLevel>4</EquipmentEsLevel>힘
              </span>
            </EquipmentTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox style={{ width: "65px" }}>
            <AccessoryTextH4>고대</AccessoryTextH4>
            <AccessoryTextH4>
              치명 + 477
              <br />
              특화 +494
            </AccessoryTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <AccessoryTextH5>
              <EquipmentSpan>
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
                <br />
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
                <br />
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
              </EquipmentSpan>
            </AccessoryTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH4>
              <EquipmentSpan>
                +18고대
                <br />
                <span>초월2</span>
              </EquipmentSpan>
              사멸
            </EquipmentTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH5>
              <span style={{ letterSpacing: "-1px", lineHeight: "140%" }}>
                <EquipmentEsLevel>1</EquipmentEsLevel>
                공격력
                <br />
                <EquipmentEsLevel>4</EquipmentEsLevel>힘
              </span>
            </EquipmentTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox style={{ width: "65px" }}>
            <AccessoryTextH4>고대</AccessoryTextH4>
            <AccessoryTextH4>
              치명 + 477
              <br />
              특화 +494
            </AccessoryTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <AccessoryTextH5>
              <EquipmentSpan>
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
                <br />
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
                <br />
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
              </EquipmentSpan>
            </AccessoryTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH4>
              <EquipmentSpan>
                +18고대
                <br />
                <span>초월2</span>
              </EquipmentSpan>
              사멸
            </EquipmentTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH5>
              <span style={{ letterSpacing: "-1px", lineHeight: "140%" }}>
                <EquipmentEsLevel>1</EquipmentEsLevel>
                공격력
                <br />
                <EquipmentEsLevel>4</EquipmentEsLevel>힘
              </span>
            </EquipmentTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox style={{ width: "65px" }}>
            <AccessoryTextH4>고대</AccessoryTextH4>
            <AccessoryTextH4>
              치명 + 477
              <br />
              특화 +494
            </AccessoryTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <AccessoryTextH5>
              <EquipmentSpan>
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
                <br />
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
                <br />
                <AccessoryEgLevel>4</AccessoryEgLevel>
                예리한 둔기
              </EquipmentSpan>
            </AccessoryTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
      <ContentBox>
        <ContentImageFigure>
          <AncientImage />
        </ContentImageFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH4>
              <EquipmentSpan>
                +18고대
                <br />
                <span>초월2</span>
              </EquipmentSpan>
              사멸
            </EquipmentTextH4>
          </EquipmentTextBox>
        </ContentTextFigure>
        <ContentTextFigure>
          <EquipmentTextBox>
            <EquipmentTextH5>
              <span style={{ letterSpacing: "-1px", color: "#fa5d00" }}>
                회심 (2단계)
              </span>
              <br />
              연성 레벨 &nbsp;
              <span style={{ letterSpacing: "-1px", color: "#f99200" }}>
                합 32
              </span>
            </EquipmentTextH5>
          </EquipmentTextBox>
        </ContentTextFigure>
      </ContentBox>
    </ContentContainer>
  );
}

export default Equipment;

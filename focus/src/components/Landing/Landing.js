import React from "react";
import landing from "../../assets/images/Landing.svg";
import {
  ContentSection,
  Showcase,
  ShowcaseHeader,
  ShowcaseImg,
  ShowcaseImgContainer,
  ShowcaseInfo,
  ShowcaseInfoHeader,
  ShowcaseInfoText,
} from "./Landing.elements";

const Landing = () => {
  return (
    <ContentSection>
      <Showcase>
        <ShowcaseHeader>AlwaysFocus</ShowcaseHeader>
        <ShowcaseImgContainer>
          <ShowcaseImg src={landing}></ShowcaseImg>
        </ShowcaseImgContainer>
        <ShowcaseInfo>
          <ShowcaseInfoHeader>Constantly Improving</ShowcaseInfoHeader>
          <ShowcaseInfoText>
            Skills ranging from frontend design to Machine Learning
          </ShowcaseInfoText>
        </ShowcaseInfo>
      </Showcase>
    </ContentSection>
  );
};

export default Landing;

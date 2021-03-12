import React from "react";
import data from "../../assets/images/data.svg";
import integrate from "../../assets/images/integrate.svg";
import ai from "../../assets/images/AI.svg";
import {
  PointsContainer,
  PointsSection,
  PointsTitle,
  PointsCardsContainer,
  PointsCard,
  PointsImage,
  PointsCardFeatureTitle,
  PointsCardFeatureText,
  PointsBackground,
} from "./LandingPoints.elements";

const LandingPoints = () => {
  return (
    <PointsContainer>
      <PointsSection>
        <PointsTitle>Overview</PointsTitle>
        <PointsCardsContainer>
          <PointsCard>
            <PointsImage src={ai}></PointsImage>
            <PointsCardFeatureTitle>Machine Learning</PointsCardFeatureTitle>
            <PointsCardFeatureText></PointsCardFeatureText>
          </PointsCard>
          <PointsCard>
            <PointsImage src={data}></PointsImage>
            <PointsCardFeatureTitle>Data Analytics</PointsCardFeatureTitle>
            <PointsCardFeatureText></PointsCardFeatureText>
          </PointsCard>
          <PointsCard>
            <PointsImage src={integrate}></PointsImage>
            <PointsCardFeatureTitle>System Integration</PointsCardFeatureTitle>
            <PointsCardFeatureText></PointsCardFeatureText>
          </PointsCard>
        </PointsCardsContainer>
      </PointsSection>
      {/* <PointsBackground src="/focus/floating-cogs.svg"></PointsBackground> */}
    </PointsContainer>
  );
};

export default LandingPoints;

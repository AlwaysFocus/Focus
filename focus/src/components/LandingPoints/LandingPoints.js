import React from "react";
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
            <PointsImage src="/focus/AI.svg"></PointsImage>
            <PointsCardFeatureTitle>Machine Learning</PointsCardFeatureTitle>
            <PointsCardFeatureText></PointsCardFeatureText>
          </PointsCard>
          <PointsCard>
            <PointsImage src="/focus/data.svg"></PointsImage>
            <PointsCardFeatureTitle>Data Analytics</PointsCardFeatureTitle>
            <PointsCardFeatureText></PointsCardFeatureText>
          </PointsCard>
          <PointsCard>
            <PointsImage src="/focus/integrate.svg"></PointsImage>
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

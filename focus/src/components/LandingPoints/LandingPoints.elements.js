import styled from "styled-components";

export const PointsContainer = styled.div`
  background: #8d99ae;
  position: relative;
  z-index: 0;
`;

export const PointsSection = styled.section`
  min-height: 90vh;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

export const PointsTitle = styled.h2`
  margin-top: 5rem;
`;

export const PointsCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #edf2f4;

  @media screen and (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const PointsCard = styled.div`
  background: #2b2d42;
  margin: 0rem 3rem;
  display: flex;
  max-width: 30rem;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  border-radius: 3rem;
  padding: 1rem 1rem;

  @media screen and (max-width: 1200px) {
    margin: 5rem 0rem;
  }
`;

export const PointsImageContainer = styled.div``;

export const PointsImage = styled.img`
  height: 20rem;
  width: auto;
  object-fit: cover;
`;

export const PointsCardFeatureTitle = styled.h4`
  margin: 3rem 0rem 1rem;
`;

export const PointsCardFeatureText = styled.p`
  padding: 2rem;
`;

export const PointsBackground = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  max-height: 90vh;
  z-index: -1;
`;

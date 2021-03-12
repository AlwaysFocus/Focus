import styled from "styled-components";

export const ContentSection = styled.section`
  background: #2b2d42;
`;

export const Showcase = styled.div`
  display: grid;
  min-height: 90vh;
  grid-template-columns: 10% repeat(3, minmax(5rem, 1fr)) 10%;
  grid-template-rows: 1fr 2fr 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 10% 1fr 10%;
  }
`;

export const ShowcaseHeader = styled.h2`
  grid-column: 2/3;
  font-size: 5rem;
  align-self: center;
  padding-top: 3rem;

  @media screen and (max-width: 1200px) {
    grid-column: 2/3;
    text-align: center;
  }
`;

export const ShowcaseImgContainer = styled.div`
  grid-row: 2/3;
  grid-column: 3/4;
  object-fit: cover;
  @media screen and (max-width: 1200px) {
    grid-column: 2/3;
  }
`;
export const ShowcaseImg = styled.img`
  align-self: center;
  justify-self: center;
  max-height: 30rem;
  @media screen and (max-width: 1200px) {
    width: 100%;
    object-fit: contain;
  }
`;

export const ShowcaseInfo = styled.div`
  grid-column: 4/5;
  grid-row: 3/4;
  @media screen and (max-width: 1200px) {
    grid-column: 2/3;
    text-align: center;
  }
`;

export const ShowcaseInfoHeader = styled.h3`
  padding-bottom: 3rem;
`;

export const ShowcaseInfoText = styled.p``;

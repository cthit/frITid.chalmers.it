import styled from "styled-components";

export const Fill = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 1;

  display: flex;
  flex-direction: column;
`;

export const MarginTop = Fill.extend`
  margin: 8px;
`;

export const Margin = Fill.extend`
  margin: 4px; /*Half the standard margin*/
`;

export const Spacing = styled.div`
  width: 8px;
  height: 8px;
`;

export const Padding = Fill.extend`
  padding: 8px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 1;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const Center = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 1;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
`;

export const TwoColGridWithBigGap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
`;

export const TwoColGridWithSmallGap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
  row-gap: 8px;
`;

export const ThreeColGrid = styled.div`
  display: grid;
  grid-template-column: 1fr, 1fr, 1fr;
  column-gap: 8px;
  row-gap: 8px;
`;

import { css, keyframes } from "styled-components";

export const GridAllCenter = css`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const GridColumn = (count) => css`
  grid-template-columns: repeat(${count}, 1fr);
  column-gap: 3rem;
  row-gap: 3rem;
`;

export const FlexAllCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const FlexJustifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const FlexSpaceBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WidthAutoCSS = css`
  width: 95%;
  max-width: 119.4rem;
  margin: 0 auto;
`;

export const ShadowCSS = css`
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5);
`;

export const FadeInKeyFrame = keyframes`
	0% {
		opacity: 0;
		transform: translateY(20%);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

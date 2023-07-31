import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
        ${reset}
    *{
		box-sizing: border-box;
        @font-face {
		font-family: 'LINESeedKR-Th';
		src: url('/Assets/Font/LINESeedKR-Th.ttf');
	    }
        @font-face {
		font-family: 'LINESeedKR-Rg';
		src: url('/Assets/Font/LINESeedKR-Rg.ttf');
	    }
        @font-face {
		font-family:'LINESeedKR-Bd';
		src: url('/Assets/Font/LINESeedKR-Bd.ttf');
	    }
		@font-face {
		font-family: 'Lobster-Regular.ttf';
		src: url('/Assets/Font/Lobster-Regular.ttf');
	    }
  		padding: 0;
  		margin: 0;
          box-sizing: border-box;
    }

    html {
        font-size: 100%;
        font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
        @media screen and (max-width:820px) {
            font-size:50%;
        }
    }

    ul, li {
        list-style: none;
    }

    button {
        border: none;
    }

    input {
        outline: none;
    }

    textarea {
        font-family: 'LINESeed-Rg';
    }
`;

export default GlobalStyles;

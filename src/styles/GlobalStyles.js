import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	//style reset
	${reset}
	* {
		box-sizing:border-box;
	}
	body {
		letter-spacing: -2px;
		background-color: #fafafa;
  }
	a {
		text-decoration: none;
		color:#1f334a;
	}
	p {
		color:#1f334a;
	}
	ul {
		margin:0;
		padding:0;
	}
	.readable-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0,0,0,0);
	}

	:root {
	
	}
`;

export default GlobalStyles;

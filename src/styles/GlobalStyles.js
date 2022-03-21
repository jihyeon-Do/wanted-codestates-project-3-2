import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
	//style reset
	${reset}
	body {
		
  }
	a {
		text-decoration: none;
	}
	ul {
		margin:0;
		padding:0;
	}

	:root {
	
	}
`;

export default GlobalStyles;

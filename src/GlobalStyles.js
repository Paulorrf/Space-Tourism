import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    font-family: 'Roboto Condensed', sans-serif;
}

html, body {
    height: 100%;
    width: 100%;
    //overflow-y: hidden;

    ul {
        li {
            list-style: none;
        }
    }

    a {
        text-decoration: none;
    }
}
`;

export default GlobalStyles;

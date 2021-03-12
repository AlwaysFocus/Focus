import { createGlobalStyle } from "styled-components";

// Colors
// #2B2D42
// #8D99AE
// #EDF2F4
// #EF233C
// #D90429
//

const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

body {
  color: #EDF2F4;
  font-family: 'Raleway', sans-serif;
}

h1 {
  font-size: 2.5rem;
  font-family: 'DotGothic16', sans-serif;
}

h2 {
  font-size: 8rem;
  font-family: 'DotGothic16', sans-serif;
  color: #EF233C;
}

h3 {
  font-size: 3.5rem;
}

h4 {
  font-size: 3rem;
}

p {
  font-size: 2.5rem;
}

li {
  font-size: 2rem;
}

a {
  color: white;
  text-decoration: none;
}
/*# sourceMappingURL=styles.css.map */

@media screen and (max-width: 1200px){
  html{
    font-size: 50%;
  }

}
`;

export default GlobalStyle;

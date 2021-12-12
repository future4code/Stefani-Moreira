import styled from "styled-components";
import PublicPage from "../../assets/images/background-public-page.jpg";
import PrivatePage from "../../assets/images/background-private-page.jpg";

const PublicPageStyle = styled.div `
background: url(${PublicPage}) no-repeat center center;
background-size: 99.97% 99.99%;
background-color: #000000;
min-height: 41.05rem;

@media (max-width: 600px) {
    background: url(${PrivatePage});
    min-height: 46rem;
}
`
const PrivatePageStyle = styled.div `
background: url(${PrivatePage});
background-size: 99.97% 99.96%;
background-color: #000000;
min-height: 41.05rem;

@media (max-width: 800px) {
 min-height: 46rem;
}
`

export { PublicPageStyle, PrivatePageStyle }
import styled from "styled-components";
import PublicPage from "../../assets/images/background-public-page.jpg";
import PrivatePage from "../../assets/images/background-private-page.jpg";


const PublicPageStyle = styled.div `
background: url(${PublicPage}) center center;
background-size: 99.99% 99.99%;
min-height: 41.05rem;
`
const PrivatePageStyle = styled.div `
background-image: url(${PrivatePage});
min-height: 41.05rem;
`

export { PublicPageStyle, PrivatePageStyle }
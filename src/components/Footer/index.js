import React from 'react';
import {
    MDBFooter,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
import "./footer.css";

const SiteFooter = () => {
    return (
        <MDBFooter className="siteFooter">
            <MDBRow className="footerContainer">
                <MDBCol className="footerGithub">
                    <a href="https://github.com/cluelesslinh" target="_blank" rel="noopener noreferrer">
                        <img className="footerImage img-fluid" src={process.env.PUBLIC_URL + "/images/github_icon.svg"} alt="github" /></a>
                </MDBCol>
                <MDBCol className="footerLinkedin">
                    <a href="https://www.linkedin.com/in/linhpham135117/" target="_blank" rel="noopener noreferrer">
                        <img className="footerImage img-fluid" src={process.env.PUBLIC_URL + "/images/linkedin_icon.svg"} alt="linkedin" /></a>
                </MDBCol>
            </MDBRow>
        </MDBFooter >
    );
}

export default SiteFooter;
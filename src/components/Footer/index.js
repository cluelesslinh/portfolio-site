import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';

const SiteFooter = () => {
    return (
        <MDBFooter className="siteFooter">
            < MDBContainer fluid className="footerContainer">
                <MDBRow>
                    <MDBCol>
                        footer
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </MDBFooter >
    );
}

export default SiteFooter;
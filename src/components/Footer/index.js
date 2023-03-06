import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';

const LNYfooter = () => {
    return (
        <MDBFooter className="footerLNY text-white">
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

export default LNYfooter;
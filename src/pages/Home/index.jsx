import React from 'react';
import { MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import "./indexstyle.css";

const Home = () => {

    return (

        <div>

            <section id="aboutMe">
                <div className="profileContainer">
                    <div className="profilePic">
                        <img className="profilePic" src={process.env.PUBLIC_URL + "/images/linh-pham.png"} alt="profilepic" />
                    </div>
                    <div className="profileDesc">
                        Hello! My name is Linh. I am a front-end web developer. I'm learning how to bring
                        concepts to life using HTML, JaveScript, and CSS. I hope to optimize the user's
                        experience by implementing a pleasant user interface that is visually appealing and
                        simple to use. I am eager to learn and try new things to become a better developer.
                    </div>
                </div>
            </section>

            <section id="projects">
                <MDBRow className="projectsRow">

                    <MDBCol className="projectsTitle col-12">PROJECTS</MDBCol>

                    <MDBCol className="businessWebsite col-lg-6">
                        <div className="titleLNY">LNY OPTOMETRY</div>
                        <div className="descLNY">
                            Business website built with REACT. Techs: JavaScript, CSS, Bootstrap mdb-react-ui-kit,
                            Parallax, Gallery, and Google Map. Users can navigate through different pages of the
                            site with the navbar menu whilte viewing additional info in the footer. I learned how
                            to implement a contact form with emailing function using emailjs as well as creating a
                            picture gallery for showcasing.
                        </div>
                    </MDBCol>

                    <MDBCol className="pokeDex col-lg-6">
                        <div className="titlePokedex">Pokedex</div>
                        <div className="descPokedex">
                            Pokedex is an app that lets the user see details about a Pokemon. Techs: DOM interaction,
                            pokeAPI, Ajax, JS, jQuery, and Debugging with ESlint. App is used to search for a Pokemon
                            through asynchronous operation via fetch and promises to retrieve data from an external API.
                            I learned about page styling with React-Bootstrap and designing with CSS FlexBox.
                        </div>
                    </MDBCol>

                    <MDBCol className="meetApp col-lg-6">
                        <div className="titleMeet">Meet</div>
                        <div className="descMeet">
                            A serverless progressive web app (PWA) with React using a test driven development (TDD)
                            technique. App uses the Google Calendar API to fetch upcoming events. Techs: OAuth2
                            authentication flow, AWS Lambda, Jest, Puppeteer, and Atatus. I learned about Unit
                            Testing, Integration Testing, and End to End Testing using User Stories / Features and
                            Scenarios while building this app. I also learned how to implement a chart to show data
                            called from the API.
                        </div>
                    </MDBCol>

                    <MDBCol className="chatApp col-lg-6">
                        <div className="titleChat">Chat</div>
                        <div className="descChat">
                            A chatting app for both Android and IOS devices developed using React Native. The app will
                            provide users with a chat interface and optoins to share images and their location. Techs:
                            Expo, Google Firestore DB and Aunthentication, Firebase Cloud Storage, and Gifted Chat. I
                            learned how to use an Anrioid/IOS emulator in order to test the app's functions.
                        </div>
                    </MDBCol>

                </MDBRow>
            </section>

        </div>

    );
};

export default Home;
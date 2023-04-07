import React from 'react';
import { MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import { Parallax, Background } from 'react-parallax';
import "./indexstyle.css";

const Home = () => {

    return (

        <div>

            <MDBRow className="profileRow">
                <MDBCol className="profileContainer">
                    <div className="profilePic col-md-4 col-sm-12">
                        <img className="profilePic img-fluid" src={process.env.PUBLIC_URL + "/images/linh-pham.png"} alt="profilepic" />
                    </div>
                    <div className="descProfile col-md-6 col-sm-12">
                        Hello! My name is Linh. I am a front-end web developer. I'm learning how to bring
                        concepts to life using HTML, JaveScript, and CSS. I hope to optimize the user's
                        experience by implementing a pleasant user interface that is visually appealing and
                        simple to use. I am eager to learn and try new things to become a better developer.
                    </div>
                </MDBCol>
            </MDBRow >

            <MDBRow className="projectsRow">

                <MDBCol className="col-12">
                    <Parallax className="projectsTitle" strength={450}>
                        <Background>
                            <img className="projectBG" src={process.env.PUBLIC_URL + "/images/projectsbg.jpg"} alt="projectsBG" />
                        </Background>
                        <div className="projectTitleBox">
                            <div className="projectTitle">PROJECTS</div>
                        </div>
                    </Parallax>
                </MDBCol>

                <MDBRow className="projectOutline col-12">
                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <div className="titleProject">LNY OPTOMETRY</div>
                        <div className="descProject">
                            Business website built with REACT. Techs: JavaScript, CSS, Bootstrap mdb-react-ui-kit,
                            Parallax, Gallery, and Google Map. Users can navigate through different pages of the
                            site with the navbar menu whilte viewing additional info in the footer. I learned how
                            to implement a contact form with emailing function using emailjs as well as creating a
                            picture gallery for showcasing.
                        </div>
                        <div className="linkProject">
                            <div><a href="https://lnyoptometry.vercel.app/" target="_blank" rel="noopener noreferrer">Launch Website</a></div>
                            <div><a href="https://github.com/cluelesslinh/lnyoptometry" target="_blank" rel="noopener noreferrer">See on GitHub</a></div>
                        </div>
                    </MDBCol>
                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <img className="imageProject img-fluid" src={process.env.PUBLIC_URL + "/images/LNYimage.png"} alt="LNYimage" />
                    </MDBCol>
                </MDBRow>

                <MDBRow className="projectOutline col-12">
                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <div className="titleProject">POKEDEX</div>
                        <div className="descProject">
                            Pokedex is an app that lets the user see details about a Pokemon. Techs: DOM interaction,
                            pokeAPI, Ajax, JS, jQuery, and Debugging with ESlint. App is used to search for a Pokemon
                            through asynchronous operation via fetch and promises to retrieve data from an external API.
                            I learned about page styling with React-Bootstrap and designing with CSS FlexBox.
                        </div>
                        <div><a href="https://cluelesslinh.github.io/pokedex-js/" target="_blank" rel="noopener noreferrer">Launch Web App</a></div>
                        <div><a href="https://github.com/cluelesslinh/pokedex-js" target="_blank" rel="noopener noreferrer">See on GitHub</a></div>
                    </MDBCol>
                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <img className="imageProject img-fluid" src={process.env.PUBLIC_URL + "/images/pokedeximage.png"} alt="pokedexImage" />
                    </MDBCol>
                </MDBRow>

                <MDBRow className="projectOutline col-12">
                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <div className="titleProject">MEET</div>
                        <div className="descProject">
                            A serverless progressive web app (PWA) with React using a test driven development (TDD)
                            technique. App uses the Google Calendar API to fetch upcoming events. Techs: OAuth2
                            authentication flow, AWS Lambda, Jest, Puppeteer, and Atatus. I learned about Unit
                            Testing, Integration Testing, and End to End Testing using User Stories / Features and
                            Scenarios while building this app. I also learned how to implement a chart to show data
                            called from the API.
                        </div>
                        <div className="linkProject">
                            <div><a href="https://cluelesslinh.github.io/meet/" target="_blank" rel="noopener noreferrer">Launch Web App</a></div>
                            <div><a href="https://github.com/cluelesslinh/meet" target="_blank" rel="noopener noreferrer">See on GitHub</a></div>
                        </div>
                    </MDBCol>
                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <img className="imageProject img-fluid" src={process.env.PUBLIC_URL + "/images/meetimage.png"} alt="meetImage" />
                    </MDBCol>
                </MDBRow>

                <MDBRow className="projectOutline col-12">
                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <div className="titleProject">CHAT</div>
                        <div className="descProject">
                            A chatting app for both Android and IOS devices developed using React Native. The app will
                            provide users with a chat interface and optoins to share images and their location. Techs:
                            Expo, Google Firestore DB and Aunthentication, Firebase Cloud Storage, and Gifted Chat. I
                            learned how to use an Anrioid/IOS emulator in order to test the app's functions.
                        </div>
                        <div className="linkProject"><a href="https://github.com/cluelesslinh/hello-world-chat" target="_blank" rel="noopener noreferrer">See on GitHub</a></div>
                    </MDBCol>
                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <img className="imageProject img-fluid" src={process.env.PUBLIC_URL + "/images/chatimage.png"} alt="chatImage" />
                    </MDBCol>
                </MDBRow>

            </MDBRow>

        </div >

    );
};

export default Home;
import React from 'react';
import { MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import { Parallax, Background } from 'react-parallax';
import Button from 'react-bootstrap/Button';
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
                        concepts to life using HTML, JavaScript, and CSS. I hope to optimize the user's
                        experience by implementing a pleasant user interface that is visually appealing and
                        simple to use. I am eager to learn and try new things to become a better developer.
                    </div>
                </MDBCol>
            </MDBRow >

            <MDBRow className="projectsRow">

                <MDBCol className="col-12">
                    <Parallax className="parallaxProject" strength={450}>
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
                        <img className="imageProject img-fluid" src={process.env.PUBLIC_URL + "/images/msnsurfaces.png"} alt="LNYimage" />
                    </MDBCol>
                </MDBRow>

                <MDBRow className="projectOutline col-12">
                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <div className="titleProject">MSN SURFACES</div>
                        <div className="descProject">
                            Business website built with REACT + Vite. Techs: JavaScript, CSS, Tailwind, Bootstrap mdb-react-ui-kit,
                            Parallax, and Gallery. Users can browse through different countertop material. I learned how to
                            implement a local state api.
                        </div>
                        <div className="linkProject">
                            <div><a href="https://sangsite.vercel.app/" target="_blank" rel="noopener noreferrer">Launch Website</a></div>
                            <div><a href="https://github.com/cluelesslinh/MSN-Surfaces" target="_blank" rel="noopener noreferrer">See on GitHub</a></div>
                        </div>
                    </MDBCol>

                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <img className="imageProject img-fluid" src={process.env.PUBLIC_URL + "/images/msnsurfaces.png"} alt="MSNimage" />
                    </MDBCol>
                </MDBRow>

                <MDBRow className="projectOutline col-12">
                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <div className="titleProject">LINHFLIX</div>
                        <div className="descProject">
                            Sample movie database website created with React calling info from backend api using mongodb.
                            Users can register a new account to login. After registering, users can add movies to their
                            favorites list and update their info or delete their account. Techs: Express, MongoDB, Mongoose,
                            OAUTH, Cors, Bootstrap. I learned how to implement a movie card.
                        </div>
                        <div className="linkProject">
                            <div><a href="https://linhflixdb.netlify.app/" target="_blank" rel="noopener noreferrer">Launch Website</a></div>
                            <div><a href="https://github.com/cluelesslinh/LinhFlix-client" target="_blank" rel="noopener noreferrer">See on GitHub</a></div>
                        </div>
                    </MDBCol>

                    <MDBCol className="col-lg-6 col-md-6 col-12">
                        <img className="imageProject img-fluid" src={process.env.PUBLIC_URL + "/images/linhfliximage.png"} alt="LNYimage" />
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

                <MDBRow className="contactRow">
                    <MDBCol className="col-12">
                        <Parallax className="parallaxBox parallaxContact" strength={450}>
                            <Background>
                                <img className="contactBG" src={process.env.PUBLIC_URL + "/images/contactBG.png"} alt="contactBG" />
                            </Background>
                            <div className="contactTitleBox">
                                <div className="contactTitle">CONTACT</div>
                            </div>
                        </Parallax>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="contactRow">
                    <MDBCol className="col-12 descGIT">Get In Touch</MDBCol>
                    <MDBCol className="col-12 descContact">Looking forward to new opportunities. I will try my best to get back to you as soon as possible.</MDBCol>
                    <MDBCol className="col-12"><a href="mailto:dennisbpham@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button className="buttonEmail"> Send Email </Button>
                    </a></MDBCol>
                </MDBRow>

            </MDBRow>

        </div >

    );
};

export default Home;
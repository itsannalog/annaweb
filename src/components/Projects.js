import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ChevronRight  } from "react-bootstrap-icons";
import Contact from './Contact.js';
import crsrtile from '../images/corsair-tilecard.jpg';
import gloomtile from '../images/gloomstar-tilecard.jpg';
import moretile from '../images/more-tilecard.jpg';

function Projects() {
    return (
        <div id="lower-section">
            <div class="section" id="projects">
                <div class="wrapper">
                    <div class="black teal" id="projects-header"><h2 class="h-2">Projects.</h2></div>
                    <Row xs={1}  md={2} lg={3}>
                        <Col>
                            <Card className="proj-card border-0">
                                <Card.Img class="proj-img" src={crsrtile} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className="proj-title"><h3 class="h-3">CORSAIR</h3></Card.Title>
                                    <Button variant="dark" className="proj-btn" href="https://www.corsair.com" target="_blank">
                                        <p>visit corsair.com
                                        <ChevronRight className="smallIcon"/>
                                        </p>
                                    </Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="proj-card border-0">
                                <Card.Img class="proj-img" src={gloomtile} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className="proj-title"><h3 class="h-3">GLOOMSTAR <br class="prj-break"/>REACH</h3></Card.Title>
                                    <Button variant="dark" className="proj-btn" href="https://annalog.itch.io/gloomstar-reach" target="_blank">
                                        <p>view on itch.io
                                        <ChevronRight className="smallIcon"/>
                                        </p>
                                    </Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="proj-card border-0">
                                <Card.Img class="proj-img" src={moretile} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title className="proj-title"><h3 class="h-3">MORE <br class="prj-break"/>PROJECTS</h3></Card.Title>
                                    <Button variant="dark" className="proj-btn" href="">
                                        <p>coming soon! 
                                        {/* <ChevronRight className="smallIcon"/> */}
                                        </p>
                                    </Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div> 
            
            <div id="contact" class="slideanim"></div>
            <Contact/>
        </div>
        
    );
}

export default Projects;
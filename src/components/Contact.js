import { Linkedin, Behance, Github, Controller, Envelope } from "react-bootstrap-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import React from 'react';

function Contact() {
    const github = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Github
        </Tooltip>
    );
    const itch = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            itch.io
        </Tooltip>
    );
    const email = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Email
        </Tooltip>
    );

    return (
        <div class="section" id="connect-minisection">
            <div class="center" id="connect-wrapper">
                <div>
                    <h2 class="h-2" id="connect-ribbon"><span class="black teal" id="connect-h">Connect.</span></h2>
                </div>
                <div id="connect-links">
                    <a class="social-icon" href="mailto:annabrown.dev@gmail.com">
                        <OverlayTrigger placement="bottom" delay={{ show: 0, hide: 400 }} overlay={email}>
                            <Envelope className="icon-spacing" id="first" alt="email icon" />
                        </OverlayTrigger>
                    </a>
                    <a class="social-icon" href="https://github.com/itsannalog?tab=repositories" target="_blank">
                        <OverlayTrigger placement="bottom" delay={{ show: 0, hide: 400 }} overlay={github}>
                            <Github className="icon-spacing" alt="Github icon" />
                        </OverlayTrigger>
                    </a>
                    <a class="social-icon" href="https://annalog.itch.io" target="_blank" rel="noreferrer">
                        <OverlayTrigger placement="bottom" delay={{ show: 0, hide: 400 }} overlay={itch}>
                            <Controller className="icon-spacing" alt="itch.io icon" />
                        </OverlayTrigger>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Contact;
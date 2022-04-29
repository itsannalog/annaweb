import { Briefcase,GeoAlt,Mortarboard } from "react-bootstrap-icons";

import React from 'react';

function Intro() {
    return (
        <div class="section" id="intro">
            <div class="wrapper">
            <div class="vertical-spacer"></div>
                <div >
                    <p class="h-1">Hello, World.</p>
                    <div class="black teal" id="anna"><h1 class="h-1">I'm Anna.</h1></div>
                    <div>
                        <p>Since I first landed on the internet, I've been creating for games and the web. 
                            It's been more than 10 years since I first learned to code, and in that time I've made websites for student organizations, released indie games, 
                            graduated with a C.S. degree, dabbled in freelancing, and developed tools to support collegiate esports. 
                            Now, I work full-time for a gaming peripheral company, where the work I do is seen by thousands worldwide, every single day. 
                        </p><p>
                            I'm always looking for ways to improve my craft, make the web more accessible, and solve problems creatively. I'm still learning new things every day, and I love
                            combining my artistic and analytical sides to create something great. 
                        </p>
                        <br/>
                        <p>
                            <Briefcase className="icon-spacing" id="first" alt="briefcase icon"/> Web Producer
                            <GeoAlt className="icon-spacing" alt="geolocation pin icon"/>West Coast, USA 
                            <Mortarboard className="icon-spacing" alt="graduation cap icon"/> B.S. Computer Science
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Intro;
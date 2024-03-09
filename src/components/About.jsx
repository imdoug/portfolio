import React from "react";

const About = ()=>{
    return(
        <>
        <div className="about-section" id="ABOUT">
                <div className="about">
                    <p className="code-text">{"<"}h2{">"}</p>
                    <h2><span>About me</span></h2>
                    <p className="code-text">{"<"}/h2{">"}</p>
                    <div className="presentation">
                    <p className="code-text">{"<"}p id="presentation"{">"}</p>
                        <p className="about-text">
                                I am a Software Engineering competent in React.js, MongoDB, Express.js, Node.js, HTML, CSS, Javascript, and
                                Python. I am enthusiastic about developing practical and time-saving software solutions. Adept at identifying
                                issues with existing software and creating innovative new software programs. I am committed to working within
                                client and project specifications to deliver cost-effective, timely results. I’m working full-time but looking
                                for a position that will bring me new challenges and better compensation.
                        </p>
                        <p className="code-text">{"<"}/p{">"}</p>
                    </div>
                    <button className="resume btn"><a href="https://drive.google.com/file/d/1Le82QA0wfC7HFOv4UjQD6iibP0egNFKF/view?usp=sharing" target="_blank">RESUME</a></button>
                    <div className="icons">
                        <p className="code-text">{"<"}!-- here are some of my social networks and some code I wrote --{">"}</p>
                        <a href="https://www.linkedin.com/in/imdoug/"  target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a href="https://github.com/imdoug"  target="_blank"><i className="fa fa-github"></i></a>
                        <a  href="https://codepen.io/imdoug/"  target="_blank"><i className="fa fa-codepen"></i></a>
                        <a href="https://www.instagram.com/i.mdoug/"  target="_blank"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>

        </div>
        </>
    )
}
export default About
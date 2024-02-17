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
                        <p className="about-text">Fueled by my desire to meaningfully interact with people,
                             I have a vast curiosity and appreciation for the challenge
                              of designing software that can enrich peoples’ lives.
                               I am eager to join a software engineering team that will
                                synthesize my capacity to work with others and my new
                                 toolkit in JavaScript, Python, React, SQL and Express.
                                  My immediate goal is to join a value-based company as
                                   a junior full-stack developer where I can hone my skills
                                    and pursue my interests in automation and OOP. I want
                                     to build applications to serve and meet the needs of 
                                     those who want to enter the tech space.
                        </p>
                        <p className="code-text">{"<"}/p{">"}</p>
                    </div>
                    <button className="resume btn"><a href="https://drive.google.com/file/d/1kMCy_Vbk3-9CWjzZtf6Jss_-xR3dpWYc/view?usp=sharing" target="_blank">RESUME</a></button>
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
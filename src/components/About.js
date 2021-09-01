import React from "react";

const About = ()=>{
    return(
        <>
        <div className="about-section">
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
                    <button className="resume btn"><a href="https://docs.google.com/document/d/11pId6c1UgXNilWA3_5HWdcz08NkS5MeDXjIH5kALR7Y/edit?usp=sharing" target="blank">RESUME</a></button>
                    <div className="icons">
                        <p className="code-text">{"<"}!-- ALALAALALALALALLALALALALALALALALALALALALA --{">"}</p>
                        <i class="fa fa-linkedin"></i>
                        <i class="fa fa-codepen"></i>
                        <i class="fa fa-github"></i>
                        <i class="fa fa-instagram"></i>
                    </div>
                </div>

        </div>
        </>
    )
}
export default About
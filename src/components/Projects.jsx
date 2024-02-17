import React from 'react';

const Projects = () =>{
    return(
        <>
        <div className="projects" id="PROJECTS">
            <div className="projects-head">
                <p className="code-text">{"<"}h2{">"}</p>
                <h2>Projects</h2>
                <p className="code-text">{"<"}/h2{">"}</p>
            </div>
            <p className="code-text">{"<"}div id="applications-I-build"{">"}</p>
            <div className="project-section">
                <div className="project-box">
                    <h3>Pokedex</h3>
                    <hr className="mini-bar"/>
                    <img src="https://i.ibb.co/LCLgMy3/Pokemon.gif"/>
                    <p>In this first tech Project, I combine my HTML,
                        CSS and JavaScript skills to create a Pokedex
                        where the user can search for pokemons and get
                        all their information. I utilized user stories
                            and wireframes to scope the project and 
                            incorporate MVP. For programming languages, 
                            I used JavaScript and jQuery to manipulate the
                            DOM and CSS to give an immersive experience to
                            the user.</p>
                            <button className="project-btn"><a href="https://pokemon-world-imdoug.netlify.app/" target="_blank">SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>Starbelly</h3>
                    <hr className="mini-bar"/>
                    <img src="/assets/Starbellyup.gif"/>
                    <p>This is a detailed restaurant webside, 
                        where I dived in the best practices for 
                        resposive design and creating something 
                        that would be appeling to costumers and 
                        also had a simple and usefull UI. Tech 
                        stack for this project was: React.js, Responsive Design, Flex/ Grid, HTML/CSS </p>
                            <button className="project-btn"><a href="https://starbelly.dougmoreira.me" target="_blank">SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>GameSpot</h3>
                    <hr className="mini-bar"/>
                    <img src="/assets/Gamespot.gif"/>
                    <p>This project I challenged myself to learn something new,
                        and combining my previous experiences I decided to create 
                        a e-commerce for gamers with games and consoles, 
                        with a popular payment provider witch is Stripe Api. 
                        The app has a cart functionality that add up all the items,
                        and recalculate in case you remove any. Tech used was 
                        React.js, Material-UI, Commerce.js and Stripe
                        .</p>
                            <button className="project-btn"><a href="https://gamespot.dougmoreira.me" target="_blank">SEE NOW</a></button>
                </div>
            </div>
            <div className="projects-head">
                <p className="code-text">{"<"}h2{">"}</p>
                <h2>Some Companies I worked in Projects for: </h2>
                <p className="code-text">{"<"}/h2{">"}</p>
            </div>
            <p className="code-text">{"<"}div id="companies-logo"{">"}</p>
            <div className="project-section">
                <div className="project-box">
                    <img src="/assets/F1LOGO.jpeg"/>
                </div>
                <div className="project-box">
                    <img src="/assets/pplus.jpg"/>
                </div>
                <div className="project-box">
                    <img src="/assets/indeed-logo.svg"/>
                </div>
                <div className="project-box">
                    <img src="/assets/walmart.svg"/>
                </div>
                <div className="project-box" >
                    <img src="/assets/nickelodeon-2-1.svg"/>
                </div>
                <div className="project-box" >
                    <img src="/assets/astrazeneca-1.svg"/>
                </div>
            </div>
            <p className="code-text">{"<"}/div{">"}</p>
            <p className="code-text last">{"<"}!-- like what you see? hire me! --{">"}</p>
        </div>
        </>
    )
}

export default Projects

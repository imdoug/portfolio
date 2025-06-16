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
                    <img src="/assets/pokemon.gif"/>
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
                            <button className="project-btn"><a href="https://starbelly.dougmoreira.com" target="_blank">SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>TalkBack</h3>
                    <hr className="mini-bar"/>
                    <img src="/assets/talkback.gif"/>
                    <p> This project is a LMS SaaS app featuring user authentication, 
                        subscriptions, and payments using Next.js, 
                        Supabase, and Stripe — also integrates Vapi 
                        AI voice agent for seamless, interactive 
                        learning sessions.
                    </p>
                            <button className="project-btn"><a href="https://talkback-ruby.vercel.app/" target="_blank">SEE NOW</a></button>
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

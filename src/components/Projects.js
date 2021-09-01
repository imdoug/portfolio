import React from 'react';

const Projects = () =>{
    return(
        <>
        <div className="projects">
            <div className="projects-head">
                <p className="code-text">{"<"}h2{">"}</p>
                <h2>Projects</h2>
                <p className="code-text">{"<"}/h2{">"}</p>
            </div>
            <p className="code-text">{"<"}div id="applications-I-build"{">"}</p>
            <div className="project-section">
                <div className="project-box">
                    <h3>Pokedex</h3>
                    <hr/>
                    <p>In this first tech Project, I combine my HTML,
                        CSS and JavaScript skills to create a Pokedex
                        where the user can search for pokemons and get
                        all their information. I utilized user stories
                            and wireframes to scope the project and 
                            incorporate MVP. For programming languages, 
                            I used JavaScript and jQuery to manipulate the
                            DOM and CSS to give an immersive experience to
                            the user.</p>
                            <button className="project-btn"><a>SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>Amores Restaurant</h3>
                    <hr/>
                    <p>This was a project that combined Mongoose, 
                        Express and Node.js (MEN) tech stack to create
                        a Server-side Application that leveraged 
                        two-model, MongoDB database. This project was
                        focused on CRUD functionality, RESTful routing
                        and MVC methodologies. I also utilized plain CSS
                            to style the application and used EJS to language
                            to build the functionality and logic of the project.</p>
                            <button className="project-btn"><a>SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>DevMuscle</h3>
                    <hr/>
                    <p>This was  a pair programming project that
                        Incremented React in the MEN stack forming
                        a MERN tech stack, this application leveraged
                        one model, Mongo DB database. Focusing to use
                            React as frontEnd framework and Express and 
                            Node.js for the backEnd work. This project was
                            also an exercise in Git collaboration, building
                            developer branches, submitting pull requests
                            and merging code.
                            </p>
                            <button className="project-btn"><a>SEE NOW</a></button>
                </div>
            </div>
            <p className="code-text">{"<"}/div{">"}</p>
            <p className="code-text last">{"<"}!-- like what you see? hire me! --{">"}</p>
        </div>
        </>
    )
}

export default Projects

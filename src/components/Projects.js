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
                    <h3>Gericht</h3>
                    <hr className="mini-bar"/>
                    <img src="https://i.ibb.co/8PTjH0k/gericht.gif"  alt='project gif'/>
                        <p> All besiness today deserve a image online
                            annd when that image is well portraid it can get them
                            hundred of new customers, so i created Gericht a fine,
                            awarded and fancy restaurant website that is complety resposive
                            with clean and detailed desgin. The stack  for this project was 
                            React.js, HTML/CS with some soft animation.  
                        </p>
                            <button className="project-btn"><a href="https://lostpaws.dougmoreira.me/" target="_blank" rel="noreferrer">SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>Beekrypt</h3>
                    <hr className="mini-bar"/>
                    <img src="https://i.ibb.co/bdfJ6Gz/beekrypt.gif"  alt='project gif'/>
                        <p>In this project I dived deep into Web3 and Blockchain
                            creatinng an applicatio that connnects to your MetaMask wallet account 
                            and not only allow you to transfer Itherium and using smart contracts
                            we save a record of each transaction you make by adding a gif to it to
                            make it simply unique and fun. The stack for this project was React.js,
                            Meta Mask, Solidity, Tailwind.
                        </p>
                            <button className="project-btn"><a href="https://lostpaws.dougmoreira.me/" target="_blank" rel="noreferrer">SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>GameSpot</h3>
                    <hr className="mini-bar"/>
                    <img src="https://i.ibb.co/wJP7KnF/gamspot.gif"  alt='project gif'/>
                        <p> With so many small business mergin today an E-commerce is something
                            that most people think about when they have a unique product but want
                            to sell it online so people from all around the worl can have  their products.
                            GameSpot is a game store  made  with, Next.js, Bootstrap, Stripe (to handle payments,
                            products, shipping rates, and the entire checkout process), and Sanity that was my 
                            contennt manager handeling my products.
                        </p>
                            <button className="project-btn"><a href="https://lostpaws.dougmoreira.me/" target="_blank" rel="noreferrer">SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>Lost Paws</h3>
                    <hr className="mini-bar"/>
                    <img src="https://i.ibb.co/hB9FkLX/LostPaws.gif"  alt='project gif'/>
                    <p>In this project I challenged myself to learn something new,
                        and I learned Java and Spring Boot to create the 
                        API/backEnd for this application. On the frontEnd, I
                        used React with user context and Router to give an app visual to this application. 
                        It is a full CRUD application with RESTful API. The project 
                        itself is a web application for lost dogs to find their owners.
                        .</p>
                            <button className="project-btn"><a href="https://lostpaws.dougmoreira.me/" target="_blank" rel="noreferrer">SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>DevMuscle</h3>
                    <hr className="mini-bar"/>
                    <img src="https://i.ibb.co/K9C6JFB/DEVMuscles.gif"  alt='project gif'/>
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
                            <button className="project-btn"><a href="https://devmuscles.dougmoreira.me/" target="_blank" rel="noreferrer">SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>Amores Restaurant</h3>
                    <hr className="mini-bar"/>
                    <img src="https://i.ibb.co/316R3xB/Amores-Restaurant.gif"  alt='project gif'/>
                    <p>This was a project that combined Mongoose, 
                        Express and Node.js (MEN) tech stack to create
                        a Server-side Application that leveraged 
                        two-model, MongoDB database. This project was
                        focused on CRUD functionality, RESTful routing
                        and MVC methodologies. I also utilized plain CSS
                            to style the application and used EJS to language
                            to build the functionality and logic of the project.</p>
                            <button className="project-btn"><a href="https://amores-restaurant.herokuapp.com/restaurant" target="_blank" rel="noreferrer">SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>Mini Nike Store</h3>
                    <hr className="mini-bar"/>
                    <img src="https://i.ibb.co/Xx452WR/nike.gif"  alt='project gif'/>
                    <p>This was a project the only run on the Server,
                        it involves technologies like Noje.js, Express.js,
                        Mongoose, JavaScript, CSS, and HTML. is an e-commerce 
                        prototype using the Nike brand as inspiration. users can buy
                         sneakers and decrease the number in stock also log in and add
                          more sneakers for sale. The project was focused on CRUD functionality,
                         RESTful routing and MVC methodologies.</p>
                            <button className="project-btn"><a href="https://nike-serverstore.herokuapp.com/nike" target="_blank" rel="noreferrer">SEE NOW</a></button>
                </div>
                <div className="project-box">
                    <h3>Pokedex</h3>
                    <hr className="mini-bar"/>
                    <img src="https://i.ibb.co/LCLgMy3/Pokemon.gif"  alt='project gif'/>
                    <p>In this first tech Project, I combine my HTML,
                        CSS and JavaScript skills to create a Pokedex
                        where the user can search for pokemons and get
                        all their information. I utilized user stories
                            and wireframes to scope the project and 
                            incorporate MVP. For programming languages, 
                            I used JavaScript and jQuery to manipulate the
                            DOM and CSS to give an immersive experience to
                            the user.</p>
                            <button className="project-btn"><a href="http://pokedex.dougmoreira.me/" target="_blank" rel="noreferrer">SEE NOW</a></button>
                </div>
            </div>
            <p className="code-text">{"<"}/div{">"}</p>
            <p className="code-text last">{"<"}!-- like what you see? hire me! --{">"}</p>
        </div>
        </>
    )
}

export default Projects

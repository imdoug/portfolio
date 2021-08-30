import React from "react";

const Intro = () =>{
    return(
        <>
        <div className="day-night-btn">
            <button>CLICK ME</button>
        </div>
        <div className="nav-text">
            <p className="code-text">{"<"}div id="menu"{">"}</p>
            <nav><p>Hello, here you can get to know more <a>ABOUT ME</a>, I can show you my <a>SKILLS</a>,<br/> you can also check some of my <a>PROJECTS</a> and download my <a>RESUME</a></p></nav>
            <p className="code-text">{"<"}/div{">"}</p>
            <p className="code-text">{"<"}!-- words in uppercase are clickable --{">"} </p>
        </div>
        <div className="picture">
            <p className="code-text">{"<"}/img class="me"{">"}</p>
            <img className="profile" src="https://media-exp1.licdn.com/dms/image/C5603AQGc3ouzk5HfqA/profile-displayphoto-shrink_800_800/0/1517000788898?e=1635984000&v=beta&t=B6MgTojhbpR1yg8lfeSYdXKRwiQz1pWiPK8sRGp4xWU"></img>
            <p className="code-text">{"<"}/img{">"}</p>
        </div>
        <div className="div">
            <div className="greetings">
            <p className="code-text">{"<"}div id="say-hi"{">"}</p>
                <h1>Hi, I'm Doug,</h1>
                <div className="who-i-am">
                    <h3>I'm a Software Engineer from</h3>
                    <h3>New York, NY.</h3>
                </div>
            <p  className="code-text">{"<"}/div{">"}</p>
            </div>
        </div>
        </>
    )
}

export default Intro
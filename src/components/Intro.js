import React from "react";

const Intro = () =>{
    return(
        <>
        <div className="day-night-btn">
            <button>CLICK ME</button>
        </div>
        <p> {"<"}div id=Menu{">"}</p>
        <nav>Hello, here you can get to know more <a>ABOUT ME</a>, I can show you my <a>SKILLS</a>,<br/> you can also check some of my <a>PROJECTS</a> and download my <a>RESUME</a></nav>
        <p>{"<"}/div{">"}</p>
        <p>{"<"}!-- Words are clickable --{">"} </p>
        </>
    )
}

export default Intro
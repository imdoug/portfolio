import React from "react";

const Intro = () =>{
    const toggle = () =>{
        let icon = document.querySelector('.fa-comments-o')
        let hire = document.querySelector(".hire")
        let skillBox =  document.querySelectorAll(".skill-box")
        let miniBar =  document.querySelectorAll(".mini-bar")
        let pbtn = document.querySelectorAll(".project-btn")
        let btn = document.querySelector('.btn')
        let portfolioBox = document.querySelector('.portfolio-box')
        let body = document.querySelector('body')
        let toggle = document.getElementById('toggle')
        toggle.classList.toggle('active')
        body.classList.toggle('active')
        portfolioBox.classList.toggle('night')
        btn.classList.toggle('btn-night')
        hire.classList.toggle('hire-night')
        icon.classList.toggle('hire-night')
        for (let i = 0; i < miniBar.length; i++){
            miniBar[i].classList.toggle('night-hr')
        }
        for (let i = 0; i < skillBox.length; i++){
            skillBox[i].classList.toggle('night-box')
        }
        for (let i = 0; i < pbtn.length; i++){
            pbtn[i].classList.toggle('night-btn')
        }

    }
    window.onscroll = ()=> {
        scrollFunction()
    };
    const  scrollFunction = () => {
    let mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    return(
        <>
        <button onClick={topFunction} id="myBtn"><i className="fa fa-angle-double-up"></i></button>
        <p className="code-text mode">{"<"}!-- day/night --{">"}</p>
        <div className="btn-box">
            <div id="toggle">
                <i className="indicator" onClick={toggle}></i>
            </div>
        </div>
        <div className="nav-text">
            <p className="code-text">{"<"}div id="creative-nav"{">"}</p>
            <nav className="upper"><p>Hello, here you can get to know more <a href="#ABOUT">ABOUT ME</a>,I can show you my <a href="#SKILLS">SKILLS</a></p></nav>
            <nav className="lower"><p> you can also check some of my <a href="#PROJECTS">PROJECTS</a> and download my <a href="https://drive.google.com/file/d/1ZhyUF_HntV4c3C7PY-LR4sdwc4KvpCZW/view?usp=sharing" target="_blank">RESUME</a></p></nav>
            <p className="code-text">{"<"}/div{">"}</p>
            <p className="code-text">{"<"}!-- words in uppercase are clickable --{">"} </p>
        </div>
        <div className="picture">
            <p className="code-text">{"<"}/img class="me"{">"}</p>
            <img className="profile" src="./assets/IMG_6452.png"></img>
            <p className="code-text">{"<"}/img{">"}</p>
        </div>
        <div className="div">
            <div className="greetings">
            <p className="code-text ">{"<"}div id="say-hi"{">"}</p>
                <div className="who-i-am">
                <h1><span>Hi, I'm Doug,</span></h1>
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
"use strict";


const app = document.getElementById("app");


app.innerHTML = `

<nav class="navbar">

    <div class="nav-links">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

    </div>

</nav>



<section id="home" class="console">

    <div class="console-window">


        <div class="console-header">


            <div class="window-buttons">

                <span class="window-button"></span>

                <span class="window-button"></span>

                <span class="window-button"></span>

            </div>


            <span class="console-title">

                anubhav@backend-engineer: ~

            </span>


        </div>



        <div class="console-body">


            <p>

                <span class="prompt">

                AnubhavKr@backend-engineer:~$

                </span>

                system-status

            </p>



            <p class="output">

                Initializing Anubhav Backend Infrastructure...

            </p>



            <p class="output">

                Loading developer profile...

            </p>



            <p class="output">

                Loading project services...

            </p>



            <p class="output">

                Loading architecture modules...

            </p>



            <p class="system-online">

                ✓ SYSTEM ONLINE

            </p>



        </div>


    </div>


</section>





<section id="about" class="about">


<h2>About Me</h2>


<div class="about-container">


<p>

I am Anubhav Kumar, a Java Backend Developer and Software Engineering

enthusiast passionate about building scalable applications and solving

real-world problems through clean and efficient code.

</p>



<p>

Currently pursuing B.Tech in Computer Science Engineering, I focus on

Java programming, Data Structures & Algorithms, backend development,

and software engineering principles.

</p>



<p>

My goal is to become a skilled Software Engineer by continuously

improving my problem-solving ability and building industry-level

projects.

</p>


</div>


</section>





<section id="skills" class="skills">


<h2>Technical Skills</h2>



<div class="skills-container">



<div class="skill-card">

<h3>Programming</h3>

<p>

Java<br>

C++<br>

Python

</p>

</div>





<div class="skill-card">

<h3>Computer Science</h3>

<p>

DSA<br>

OOP<br>

DBMS<br>

Computer Networks

</p>

</div>





<div class="skill-card">

<h3>Frontend</h3>

<p>

HTML<br>

CSS<br>

JavaScript

</p>

</div>





<div class="skill-card">

<h3>Tools</h3>

<p>

Git<br>

GitHub<br>

IntelliJ IDEA<br>

VS Code

</p>

</div>




</div>


</section>


<section id="projects" class="projects">

<h2>
Projects
</h2>
<h1 style="color:red;">
TEST PROJECT SECTION
</h1>


<p class="section-description">

A collection of software engineering projects demonstrating
Java development, problem solving and frontend skills.

</p>



<div class="project-container">



<div class="project-card">


<h3>
Student Management System
</h3>


<p>

A Java based application designed to manage student records.
Implements CRUD operations, object-oriented programming concepts
and efficient data handling.

</p>


<div class="tech-stack">

<span>Java</span>
<span>OOP</span>
<span>Collections</span>
<span>File Handling</span>

</div>


<div class="project-buttons">

<a href="#">
GitHub
</a>

<a href="#">
Demo
</a>

</div>


</div>





<div class="project-card">


<h3>
Enterprise Banking System
</h3>


<p>

A backend banking application focused on secure account
management, transaction processing and scalable API design.

</p>


<div class="tech-stack">

<span>Java</span>
<span>Spring Boot</span>
<span>REST API</span>
<span>JPA</span>
<span>MySQL</span>

</div>


<div class="project-buttons">

<a href="#">
GitHub
</a>

<a href="#">
Demo
</a>

</div>


</div>





<div class="project-card">


<h3>
Developer Portfolio Website
</h3>


<p>

A modern developer portfolio built to showcase projects,
technical skills and professional experience using a
responsive frontend architecture.

</p>


<div class="tech-stack">

<span>HTML</span>
<span>CSS</span>
<span>JavaScript</span>
<span>Git</span>

</div>


<div class="project-buttons">

<a href="#">
GitHub
</a>

<a href="#">
Live Site
</a>

</div>


</div>




</div>


</section>

`;




// Navbar smooth navigation log

document.querySelectorAll(".nav-links a")
.forEach(link => {


    link.addEventListener("click", () => {


        console.log("Navigating to:", link.innerText);


    });


});

// ==============================
// SCROLL ANIMATION
// ==============================


const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},

{

threshold:0.2

}

);



document.querySelectorAll("section")
.forEach(section=>{

observer.observe(section);

});





const cards =
document.querySelectorAll(
".skill-card, .project-card, .timeline-card, .certificate-card"
);



cards.forEach(card=>{

// ==============================
// SCROLL ANIMATION
// ==============================


const animationObserver = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},
{

threshold:0.2

}

);



document
.querySelectorAll(".animate-section, .animate-card")
.forEach(element=>{


animationObserver.observe(element);


});

});
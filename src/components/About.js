import React from "react";
import author from "../about.jpg";

function About() {
  return (
    <div id="about" className="container py-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author's image" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">
            about me<span className="about-heading-span">hdi</span>
          </h1>
          <p>
            My name is Mehdi Hajikhani. I am a software developer from
            California. I graduated from Florida International University with
            aBachelor's degree in Computer Science and hold another bachelor's
            in Petroleum Engineering. As of Spring 2021 I am working towards a
            Master' in Computer Engineering. I have experience programming in
            different languages such as C, Java, PHP, and of course JavaScript.
            I am also experienced in designing and creating websites and mobile
            applications using React.js and React Native. More recently I have
            been focused on developing serverside web applications using
            Next.js. In my free time, I enjoy not having to write trivia about
            myself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

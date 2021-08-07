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
            My name is Mehdi Hajikhani. I am a software engineer from
            California. I received my Bachelor's in Computer Science from
            Florida International University (FIU). As of Spring 2021 I am
            working towards a Master's in Computer Engineering. I have
            experience programming in different languages such as C, Java, PHP,
            and Javascript. But my main focus for the last 3 years has been on
            developing for the web using React.js and Next.js on the frontend
            and Node.js, Express.js and MongoDB on the backend. In my free time,
            I enjoy not having to write trivia about myself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

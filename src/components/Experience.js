import React from "react";

function Experience() {
  return (
    <div id="experience" className="experience mt-5">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2010-2013</h3>
            <p>
              Studied Chemical Engineering at Azad University
              <br />
              Assisted in curriculum design and development for TOEFL courses at
              Tehran Institute of Technology (TIT)
              <br/>
              Freelanced as a product and web designer
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2019</h3>
            <p>
              Studied Computer Science at Florida International University
              <br />
              Participated in FIU startup
              <br />
              Received the National Science Foundation (NSF) Research Experience
              Undergraduate (REU) Fellowship
               <br/>
              Worked as a software developer in an start-up called SmartsAid
              <br />
              Interned as an automation engineer
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-Present</h3>
            <p>
              Interning at aEi.ai where I developed company's website using HTML, CSS, JS
              and JQuery
              <br/>
               Currently porting the website to ReactJS, Next.js
               <br/>
               Working towards my MS degree in Computer Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

import React from "react";

function Experience() {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2010-2013</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis velit explicabo, rerum quia voluptates nobis ea
              repudiandae impedit eum nostrum architecto voluptatibus ducimus
              laudantium blanditiis! Impedit itaque sint ipsum inventore
              dignissimos hic ipsam consectetur ut illo soluta. Pariatur,
              possimus dicta.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2019</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis velit explicabo, rerum quia voluptates nobis ea
              repudiandae impedit eum nostrum architecto voluptatibus ducimus
              laudantium blanditiis! Impedit itaque sint ipsum inventore
              dignissimos hic ipsam consectetur ut illo soluta. Pariatur,
              possimus dicta.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-Present</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis velit explicabo, rerum quia voluptates nobis ea
              repudiandae impedit eum nostrum architecto voluptatibus ducimus
              laudantium blanditiis! Impedit itaque sint ipsum inventore
              dignissimos hic ipsam consectetur ut illo soluta. Pariatur,
              possimus dicta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

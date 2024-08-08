import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Ankur"}
          feedback={"This is nice , keep going"}
        />

        <TestimonialCard
          name={"Ram"}
          feedback={'you need to work on other things too'          }
        />

        <TestimonialCard
          name={"Sundar"}
          feedback={"paisa hi paisa hoga ab toh"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;

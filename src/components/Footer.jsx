import React from "react";
import me from "../assets/photo.png"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src= {me}
          alt="Founder"
        />

        <h2>Abhinay Raj Gupta</h2>
        <p>Practice Practice Practice  </p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/@abovethepodcast1974?si=2BxkTfOQJXANpP1A" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/abhinay_r_gupta" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Abhinaycodex" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/kratos-academia.png";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
            dolore consequatur molestiae dolores quod temporibus architecto
            suscipit molestias facere error?
          </p>
          <div className="footer__socials">
            <a
              href="http://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="http://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="http://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="http://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article className="mt">
          <h4>Permalinks</h4>
          <Link to="/sobre">Sobre</Link>
          <Link to="/plans">Planos</Link>
          <Link to="/trainners">Trainners</Link>
          <Link to="/gallery">Galeria</Link>
        </article>
        <article className="mt">
          <h4>Insights</h4>
          <Link to="/">YouTube</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Events</Link>
          <Link to="/">FAQ's</Link>
        </article>
        <article className="mt">
          <h4>Entre em contacto</h4>
          <Link to="/">Contacto</Link>
          <Link to="/">Suporte</Link>
        </article>
      </div>
      <div className="footer__copytight">
        <small>
          All Rights Reserved &copy; -
          <a
            href="https://fernandodornelles.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;FD Web -&nbsp;
          </a> 
          { year}
        </small>
      </div>
    </footer>
  );
};

export default Footer;

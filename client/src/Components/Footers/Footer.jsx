import React from "react";
import ReactDOM from "react-dom";
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <footer className="footer-distributed">
          <div className="footer-left">
          <img src={'./img/Bean_There.png'} alt='logo' width='50px' height='50px'/>
            <p className="footer-links">
              <a href="#" className="link-1">
                Home
              </a>

              <a href="#">Pricing</a>

              <a href="#">About</a>

              <a href="#">Faq</a>

              <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">Bean_There © 2021</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>666 diggory Ave</span> Place, State
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+1.555.555.5555</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">support@company.com</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
              euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>

            <div className="footer-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;

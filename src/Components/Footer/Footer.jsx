import { GitIcon, LinkedinIcon, MailIcon } from "./Assets";
import "./Footer.scss";
export default function Footer() {
  
  return (
    <section id="contact" className="feedback">
      <h2 className="feedback-heading">Connect With Me</h2>
      <div className="cards">
        <div>
          <a className="card-item" href="mailto:shashwatbhatnagarvit@gmail.com">
            <MailIcon fill="#aa9aba" />

            <span>{`Gmail`}</span>
          </a>
        </div>
        <div>
          <a href="https://github.com/Shashwat26Bhatnagar" className="card-item">
            <GitIcon fill="#aa9aba" />
            <span>GitHub</span>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/shashwat-bhatnagar-bb883a226/" className="card-item">
            <LinkedinIcon fill="#aa9aba" />
            <span>Linkedin</span>
          </a>
        </div>
      </div>
      
    </section>
  );
}

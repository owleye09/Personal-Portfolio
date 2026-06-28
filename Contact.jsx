import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0mw5jti",
        "template_qy14utu",
        form.current,
        {
          publicKey: "9lsSYHrZEIOMTdmQ4",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();

          setTimeout(() => {
          setStatus("");
          }, 3000);
        },
        (error) => {
          console.log("EmailJS Error:", error);
          setStatus("Something went wrong. Please try again.");

          setTimeout(() => {
          setStatus("");
          }, 3000);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-card">
        <h2>Contact Me</h2>

        <p className="contact-intro">
          Feel free to reach out for collaborations, opportunities, or project
          discussions.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Email: sriyaagudi@gmail.com</p>
            <p>Location: Hyderabad, India</p>
            <p>LinkedIn: linkedin.com/in/sriyaa-gudi-768789278</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />

            <input type="email" name="user_email" placeholder="Your Email" required />

            <textarea name="message" placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
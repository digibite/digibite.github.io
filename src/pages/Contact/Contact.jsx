import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t4j4sy5",
        "template_22nryxw",
        e.target,
        "D_07ZoFmsX0nYWym9"
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send email. Please try again.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact" className={`${styles.contact} animateSec`}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          className={styles.contactInput}
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className={styles.contactInput}
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className={styles.contactTextArea}
          name="message"
          placeholder="Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button className={styles.contactSubmit} type="submit">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;

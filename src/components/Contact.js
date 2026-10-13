<<<<<<< HEAD
import './Contact.css';
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

const EMAILJS_SERVICE_ID = "service_1eez7q4";
const EMAILJS_TEMPLATE_ID = "template_zn4ntyq";
const EMAILJS_PUBLIC_KEY = "D-nzA3lb7koL5t_uo";
=======
import { useState } from "react";
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

<<<<<<< HEAD
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
=======
  const [sent, setSent] = useState(false);
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8

  const onChange = (field) => (e) => {
    setValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
<<<<<<< HEAD

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      setStatus({
        type: "error",
        message: "Please check the length of your entered information.",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("EmailJS success:", response.status, response.text);

      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for contacting me.",
      });

      setValues({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS sending error:", error);

      let errorMessage =
        "Message could not be sent. Please try again.";

      if (error?.text) {
        errorMessage = `EmailJS error: ${error.text}`;
      } else if (error?.message) {
        errorMessage = `EmailJS error: ${error.message}`;
      }

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="section-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's build something <span>great.</span>
          </h2>

          <p>
            Have a project in mind, a job opportunity, or just want to
            connect? Send me a message. I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>

            <p className="contact-info-description">
              Feel free to contact me for work opportunities,
              collaborations, or any questions.
            </p>

            <a
              className="contact-info-item"
              href="mailto:moizahmad334455@gmail.com"
            >
              <span className="contact-info-icon">
                <FiMail />
              </span>

              <span className="contact-info-text">
                <small>Email</small>
                <strong>moizahmad334455@gmail.com</strong>
              </span>

              <FiArrowUpRight className="contact-info-arrow" />
            </a>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <FiMapPin />
              </span>

              <span className="contact-info-text">
                <small>Location</small>
                <strong>Gujrat, Pakistan</strong>
              </span>
            </div>

            <div className="contact-socials">
              <h4>Connect with me</h4>

              <div className="contact-social-links">
                <a
                  href="https://www.linkedin.com/in/malikmoizahmad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/moizahmadawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="mailto:moizahmad334455@gmail.com"
                  aria-label="Email"
                  title="Email"
                >
                  <FiMail />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <h3>Send me a message</h3>

            <p className="contact-form-description">
              Fill out the form below and I'll get back to you.
            </p>

            <div className="contact-form-group">
              <label htmlFor="contact-name">Your Name</label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={values.name}
                onChange={onChange("name")}
                autoComplete="name"
                maxLength={100}
                required
                disabled={sending}
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email">Email Address</label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={onChange("email")}
                autoComplete="email"
                maxLength={254}
                required
                disabled={sending}
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message">Your Message</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={values.message}
                onChange={onChange("message")}
                rows={5}
                maxLength={5000}
                required
                disabled={sending}
              />
            </div>

            {status.message && (
              <div
                className={`contact-status ${
                  status.type === "success"
                    ? "contact-status-success"
                    : "contact-status-error"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.type === "success" ? (
                  <FiCheckCircle />
                ) : (
                  <FiAlertCircle />
                )}

                <span>{status.message}</span>
              </div>
            )}

            <button
              className="contact-submit"
              type="submit"
              disabled={sending}
            >
              <span>{sending ? "Sending..." : "Send Message"}</span>
              <FiSend />
            </button>

            <p className="contact-privacy-note">
              Your message will be sent through the contact form service.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}


=======
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <h2>Let's work together</h2>
        <p className="sub">Send a message and I will reply by email.</p>

        <form onSubmit={onSubmit}>
          <label>
            Name
            <input
              value={values.name}
              onChange={onChange("name")}
              autoComplete="name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={values.email}
              onChange={onChange("email")}
              autoComplete="email"
            />
          </label>

          <label>
            Message
            <textarea
              rows={4}
              value={values.message}
              onChange={onChange("message")}
            />
          </label>

          <div>
            <button className="btn p" type="submit">
              Send message
            </button>
          </div>

          {sent && (
            <p id="ok" role="status">
              Thanks! Your message has been sent.
            </p>
          )}
        </form>

        <p className="note">
          <a href="https://github.com/Moizawan101" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/malikmoizahmad" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8

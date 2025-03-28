import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './contact.css'

const Contact = () => {
  const form = useRef()
  const [resultMessage, setResultMessage] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_wh6v2rk', // service ID
        'template_mcsqai9', // template ID
        form.current,
        'ksSlBWF_lIudd3SFX' // public key
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text)
          setResultMessage({
            type: 'success',
            text: 'Your message has been sent successfully! Thank you for contacting us.',
          })
          e.target.reset()
          setTimeout(() => setResultMessage(null), 5000)
        },
        (error) => {
          console.log('Failed to send email:', error.text)
          setResultMessage({
            type: 'error',
            text: 'Oops! Something went wrong. Please try again later.',
          })
          setTimeout(() => setResultMessage(null), 5000)
        }
      )
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="contact" data-aos="fade-up">
      <h1 className="contact-title" data-aos="fade-down">
        Get In Touch
      </h1>
      <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="200">
        Feel free to drop a message if you have any questions or just want to
        say hi!
      </p>
      <div
        className="contact-container"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="hidden"
            name="contact_number"
            value={Math.floor(Math.random() * 1000000)}
          />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
        <div className="contact-info" data-aos="fade-up" data-aos-delay="600">
          <h2>Contact Info</h2>
          <p>
            Email:{' '}
            <a href="mailto:fadholasandi@gmail.com">fadholasandi@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:"></a>
          </p>
          <p>Location: Yogyakarta, Indonesia</p>
          <div className="social-links">
            <a
              href="https://instagram.com/fadholasa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com/in/fadhola-asandi-mardika-putra-a814b321b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            {/* Uncomment jika ingin menggunakan Twitter */}
            {/* <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a> */}
          </div>
        </div>
      </div>
      {resultMessage && (
        <div
          className={`result-message ${resultMessage.type}`}
          data-aos="fade-up"
        >
          {resultMessage.text}
        </div>
      )}
    </section>
  )
}

export default Contact

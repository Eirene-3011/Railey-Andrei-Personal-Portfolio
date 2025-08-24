import React from 'react';
import './Contact.css';
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c9d8521e-b3c6-4527-a27e-02150678967c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };


  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am currently available to take on new projects, collaborations, or freelance opportunities. Whether you have a cool idea, need help bringing your vision to life, or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoIosMail className="contact-icon" />
              <p>raileyandreiacosta@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoCall className="contact-icon" />
              <p>0906 923 4119</p>
            </div>
            <div className="contact-detail">
              <FaLocationDot className="contact-icon" />
              <a
                href="https://www.google.com/maps/place/148+Molave+St,+Indang,+Cavite/@14.1770215,120.8822718,40m"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#D8D8D8", textDecoration: "none" }}
              >
                148 Molave St. Kayquit 1, Indang, Cavite
              </a>
            </div>

          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name="email" required/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" required rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

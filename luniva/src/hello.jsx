import React from "react";
import "./style.css";
const Hello = () => {
  return (
      <form className="studentDetails">
        <div className="main">
          <h2>Get in touch with us</h2>
          <div className="details">
            <div className="fname">
              <label htmlFor="fname">Full Name: </label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Name"
              ></input>{" "}
            </div>
            <div className="contact">
              <label htmlFor="Contact">Email Address: </label>
              <input
                type="text"
                name="Contact"
                id="Contact"
                placeholder="Email"
              ></input>
            </div>
          </div>
          <br />
          <label htmlFor="subject">Subject: </label>
          <br />
          <input
            type="text"
            name="subject"
            id="Subject"
            placeholder="Subject"
          ></input>
          <br />
          <label htmlFor="message">Message: </label>
          <br />
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <br />
          <button type="submit">Send Message</button>
        </div>
        <div className="image">
        <img src = "https://images.squarespace-cdn.com/content/v1/58e0024e725e250f971df7f2/1497933572354-JUJM8WPYNG24TD5YKTWJ/family" alt="background"/></div>
      </form>
  );
};
export default Hello;

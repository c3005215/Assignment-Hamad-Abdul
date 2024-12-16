'use client'

import { useState } from "react";
import "./Contactus.css";
import Image from "next/image";

const ContactUs = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry,setEnquiry] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    setStatus('Thank you for contacting us! We will get back to you soon.');
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setEnquiry('');
    setMessage('');
  };

  return (
    
    
    <div className="contact-container">

      <div className="contactus">
        <Image 
          src="/images/contactus.png" 
          alt="Contact Us"
          width={4032} 
          height={3024}

        />
      </div>


      <h1 className= "contactusheader" > Contact Us </h1>

        <p className="paragraph">
          <address>
            Cantor College Address <br/>
            <a href="https://www.google.com/">Cantor College</a><br />
            Main Street<br />
            Sheffield<br />
            SC4 2BB<br />
            <br/>
            Cantor College Contact <br/>
            Tel: (01321) 2340 235<br />
            Fax: (01321) 2340 236<br />
            Email: <a href="mailto:info@cantorcollege.ac.uk">info@cantorcollege.ac.uk</a><br />
          </address>
        </p>

      
      <form onSubmit={handleSubmit} className="contact-form">


        <div className="form-group">
          <label htmlFor="firstname">Your First Name</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Your First Name"
          />
        </div>


        <div className="form-group">
          <label htmlFor="lastname">Your Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Your Last Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phonenumber">Your Phone Number</label>
          <input
            type="number"
            id="phonenumber"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="Phone Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email"> Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>


        <div className="form-group">
          <label htmlFor="enquiry">Enquiry</label> 
          <input
            type="text"
            id="enquiry"
            value={enquiry}
            onChange={(e) => setEnquiry(e.target.value)}
            required
            placeholder="Enter your enquiry"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <input
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Enter your message"
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>

      {<p>{status}</p>}
    </div>
  );
};

export default ContactUs;

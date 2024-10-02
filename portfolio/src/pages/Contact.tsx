// src/components/Contact.tsx
import React, { useState } from "react";
import "./Contact.css"; // 스타일을 위한 CSS 파일

const Contact = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:deokbin@naver.com?subject=Contact%20Form%20Submission&body=Email:%20${encodeURIComponent(
      email
    )}%0D%0APhone:%20${encodeURIComponent(
      phone
    )}%0D%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="010-1234-5678"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Your message here..."
        />

        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

import { useEffect } from "react";
import styled from "styled-components";

export default function Contact() {
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])

  return (
    <Wrapper>
      <h2  className="common-heading">Contact Us</h2>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.5754767672984!2d74.63398887432587!3d26.501610277638747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7cc080067a1%3A0xcd1a1ea0e8e3cb62!2sSt.%20Stephen&#39;s%20Senior%20Secondary%20School%2C%20Ajmer!5e0!3m2!1sen!2sin!4v1725343095260!5m2!1sen!2sin" 

      width="100%" 
      height="450" 
      style={{border:0}} 
      allowFullScreen="" 
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xvgpygjo" method="POST" className="contact-inputs">
          <input type="text"
          placeholder="username" 
          name="username"
          required
          autoComplete="off"
          />
          <input type="email"
          placeholder="Email"
          name="Email"
          required
          autoComplete="off"
          />
          <textarea name="Message"
          cols="30"
          rows="10"
          required
          autoComplete="off"
          placeholder="Enter you message"
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
      </div>
    </Wrapper>
  )
};



const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
// export default Contact;

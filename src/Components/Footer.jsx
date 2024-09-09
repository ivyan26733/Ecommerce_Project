import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsDiscord } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter,FaInstagram } from "react-icons/fa6";
import { Button } from '../styles/Button';

export default function Footer() {
  return (
    <Wrapper>
    <section className="contact-short">
        <div className="grid grid-two-column">
            <div>
                <h3>Ready to get started?</h3>
                <h3>Talk to us today</h3>
            </div>
            <div>
                <Button className='btn hireeme-btn'>
                    <NavLink to='/contact'>Get Started</NavLink>
                </Button>
            </div>
        </div>
    </section>

    <footer>
         <div className="container grid grid-four-column">
            <div className="footer-about">
                <h3>Ivyan Point</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, commodi.</p>
            </div>

         <div className="footer-subscribe">
            <h3>Subscribe to our newsletter</h3>
            <form action="#">
                <input type="email" required placeholder='Email' />
                <input type="submit" value="Subscribe" />
            </form>
         </div>
         <div className="footer-social">
            <h3>Follow us on social media</h3>
            <div className="footer-social--icons">
                <div>
                    <BsDiscord className="icons"/>
                </div>
                <div>
                    <FaFacebook className="icons"/>
                </div>
                <div>
                    <FaXTwitter className="icons"/>
                </div>
                <div>
                    <FaInstagram  className='icons'/>
                </div>
            </div>
         </div>
        
        <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 7073295354</h3>
        </div>
        </div>

        <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
                <p>@{new Date().getFullYear()} IvyanMart All Rights Reserved</p>
                <div>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
        </div>
    </footer>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .container {
    margin-left: 210px
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-size: 2rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;
    // margin-left: 120px;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    //   margin-left: -200px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

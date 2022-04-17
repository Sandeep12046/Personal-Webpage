import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navi from './Navi';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9etexhc', 'template_4i3q1ci', form.current, 'LS8P505P6Ghpz8NDy')
      .then((result) => {
          console.log(result.text);
          console.log("Sent Successfully")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <Navi/>
   <div class="container">
  <div class="content">
    <h1>Get in Touch</h1><br/>
    <form className='form-center' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  </div>
</div>
    </>
  );
};
/**/

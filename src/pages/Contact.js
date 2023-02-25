import { useRef } from 'react';

import classes from '../styles/Contact.module.css';

const ContactPage = () => {
    const nameInput = useRef();
    const emailInput = useRef();
    const messageInput = useRef();

    const submitHandler = event => {
        event.preventDefault();

        let enteredName = nameInput.current.value;
        let enteredEmail = emailInput.current.value;
        let enteredMessage = messageInput.current.value;

        console.log(enteredName, enteredEmail, enteredMessage);
        // send to backend
    }

    return (
        <div className={classes['contact-form']}>
          <h1>Contact Me</h1>
          <form onSubmit={submitHandler}>
            <div className={classes['form-group']}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" ref={nameInput} required />
            </div>
            <div className={classes['form-group']}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" ref={emailInput} required />
            </div>
            <div className={classes['form-group']}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" ref={messageInput} required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      );
};


export default ContactPage;
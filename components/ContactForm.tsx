"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailSending, setEmailSending] = useState(false);

  const submit = (e: any) => {
    e.preventDefault();
    setEmailSending(true);
    if (name && email && message) {
      // TODO - send mail
      const serviceId = "service_fjl5bvn";
      const templateId = "template_zj4treb";
      const public_key = "VAkgoc0xrYWvRKRTg";
      const endMessage = message + "\n\n" + name + "\n" + email;
      const templateParams = {
        name,
        email,
        message: endMessage,
      };

      emailjs
        .send(serviceId, templateId, templateParams, public_key)
        .then((response) => {
          setName("");
          setEmail("");
          setMessage("");
          setEmailSent(true);
          setEmailSending(false);
        })
        .then((error) => {
          if (error != undefined) {
            alert("Something went wrong, please try again.");
            console.log(error);
            setEmailSending(false);
          }
        });
    } else {
      alert("Please fill in all fields.");
      setEmailSending(true);
    }
  };

  return (
    <form className="mt-5 flex flex-col gap-8">
      <input
        type="text"
        className="w-full py-2 text-lg text-lightWhite bg-secondary border-b-2 border-primary placeholder-primary placeholder-opacity-50 outline-none"
        placeholder="Name"
        value={name}
        onChange={
          (e) => setName(e.target.value)
          // console.log(e.target.value)
        }
        required
      />
      <input
        type="email"
        required
        className="w-full py-2 text-lg text-lightWhite bg-secondary border-b-2 border-primary placeholder-primary placeholder-opacity-50 outline-none"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name=""
        id=""
        cols={10}
        rows={5}
        maxLength={500}
        className="w-full py-2 text-lg text-lightWhite bg-secondary border-b-2 border-primary placeholder-primary placeholder-opacity-50 outline-none"
        placeholder="Message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <div className="mt-3">
        {emailSent ? (
          <button disabled className="text-md mt-2 text-lightWhite py-2">
            Thank you for your message, I&apos;ll be in touch in no time!
          </button>
        ) : (
          <button
            type="submit"
            onClick={submit}
            disabled={emailSending}
            className="w-full py-2 text-lg text-lightWhite bg-primary border-2 border-primary outline-none
            transition duration-300 ease-in-out hover:bg-secondary hover:text-primary hover:border-primary
            "
          >
            Shooooooot
          </button>
        )}

        <p className="text-xs mt-2 text-lightWhite/50">
          Your email will not be stored nor spammed, feel free to contact me.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;

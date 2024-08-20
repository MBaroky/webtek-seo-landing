import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import arrowIcon from "../assets/arrow-icon.svg";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function HeaderForm({ children }) {
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_MAIN_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setFormSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error);
          setFormError(error);
        },
      );
  };
  return (
    <div className="flex min-w-[300px] basis-1/3 flex-col bg-white px-8 py-11 text-base font-light max-md:max-w-full max-md:px-5 max-md:py-1">
      <div className="flex w-full justify-between gap-5 text-4xl font-bold max-md:max-w-full max-md:flex-wrap">
        <h1 className="text-black">
          Book A <span className="font-outline-1 text-white ">Demo</span>
        </h1>
      </div>
      {formSuccess ? (
        <h2 className="text-l mt-5 text-center text-black">
          Thank you for contacting us! <br />
          We will contact you ASAP.
        </h2>
      ) : (
        <>
          <form
            ref={form}
            noValidate={true}
            className="group mt-5 max-md:mt-1"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              id="fullName"
              placeholder="Full Name"
              name="fullname"
              className="peer mt-1 rounded-none border-l-0 border-r-0 border-t-0 border-black text-black md:mt-3 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              pattern=".{7,}"
              required
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter at least 7 characters
            </span>

            <Input
              type="email"
              placeholder="Business Email"
              id="email"
              className="peer mt-1 rounded-none border-l-0 border-r-0 border-t-0 border-black text-black md:mt-3 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter a valid email address
            </span>

            <Input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              name="phone"
              className="peer mt-1 rounded-none border-l-0 border-r-0 border-t-0 border-black text-black md:mt-3 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
              pattern=".{7,}"
              required
            />
            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
              Please enter your phone number
            </span>

            <Input
              type="text"
              id="company"
              placeholder="Company Name"
              name="company"
              className="mt-1 rounded-none border-l-0 border-r-0 border-t-0 border-black text-black md:mt-3"
            />

            <Textarea
              id="message"
              placeholder="Message"
              name="message"
              className="mt-1 rounded-none border-l-0 border-r-0 border-t-0 border-black text-black max-md:min-h-[30px] md:mt-3"
            />

            <Button
              type="submit"
              className="mt-12 flex gap-2 self-start whitespace-nowrap rounded-none bg-violet-700 px-5 py-3 text-base font-medium text-white hover:bg-white hover:text-black group-invalid:pointer-events-none max-md:mt-10  max-md:px-5"
            >
              <span>Submit</span>
              <img
                loading="lazy"
                src={arrowIcon}
                alt=""
                className="aspect-[1.49] w-[27px] shrink-0 self-start"
              />
            </Button>
          </form>

          {formError ? <h6 className="hidden">{formError}</h6> : ""}
        </>
      )}
    </div>
  );
}

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
    <div className="relative z-10 flex w-full min-w-[300px] basis-1/3 flex-col items-center justify-center px-8 py-11 text-base font-light max-md:max-w-full max-md:px-5 max-md:py-1">
      <div className="flex w-full justify-center text-2xl font-semibold max-md:max-w-full max-md:flex-wrap">
        <h1 className="text-black">Get A Free SEO Audit</h1>
      </div>
      <hr class="yellow-bg my-2 h-1 w-[80px] border-t-0 dark:bg-white/10" />
      <p className="mt-3 w-[300px] text-center text-black">
        Please share the details below to get started with our services.
      </p>

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
            className="group mt-5 flex w-full flex-col max-md:mt-1"
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
              placeholder="Email Address"
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
              className="mt-12 flex gap-2 self-center whitespace-nowrap rounded-full border border-solid border-black bg-white px-5 py-3 text-base font-medium text-black hover:bg-black  hover:text-white group-invalid:pointer-events-none max-md:mt-10 max-md:px-5"
            >
              <span>Let’s Get Started</span>
            </Button>
          </form>

          {formError ? <h6 className="hidden">{formError}</h6> : ""}
        </>
      )}
    </div>
  );
}

import rightArrowDark from "../assets/right-arrow-dark.svg";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const FooterForm = () => {
  const form = useRef();
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_MAIN_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setFormSuccess(true);
        },
        error => {
          console.log("FAILED...", error);
          setFormError(error);
        }
      );
  };
  return formSuccess ? (
    <h2 className='text-center text-white text-xl'>
      Thank you for contacting us! <br />
      We will contact you ASAP.
    </h2>
  ) : (
    <>
      <form
        noValidate={true}
        ref={form}
        onSubmit={handleSubmit}
        className=' group flex flex-col pt-2 rounded-2xl border border-white border-solid max-md:max-w-full'>
        <div className='flex flex-col px-6 py-5 bg-violet-600 rounded-2xl max-md:px-5 max-md:max-w-full'>
          <div className='shrink-0 bg-orange-100 h-[3px] w-[45px]' />
          <h2 className='mt-2 text-base font-medium leading-7 text-white'>
            Contact Us
          </h2>
          <p className='mt-2 mr-7 text-sm text-white max-md:mr-2.5'>
            Reach out to us today and let's start a conversation.
          </p>
          {/* <label htmlFor='name' className='sr-only'>
            Name
          </label> */}
          <Input
            type='text'
            id='name'
            placeholder='Name'
            name='fullname'
            aria-label='Name'
            className='justify-center items-start px-4 py-3.5 mt-2 whitespace-nowrap bg-white border-2 border-gray-200 border-solid max-md:pr-5  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer'
            pattern='.{7,}'
            required
          />
          <span className='mt-2 hidden text-sm text-red-300 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
            Please enter at least 7 characters
          </span>
          {/* <label htmlFor='email' className='sr-only'>
            Email Address
          </label> */}
          <Input
            required
            type='email'
            id='email'
            name='email'
            placeholder='Email Address'
            className='justify-center items-start px-4 py-3.5 mt-2.5 bg-white border-2 border-gray-200 border-solid max-md:pr-5  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            aria-label='Email Address'
          />
          <span className='mt-2 hidden text-sm text-red-300 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
            Please enter a valid email address
          </span>

          <Input
            type='tel'
            id='phone'
            placeholder='Phone Number'
            name='phone'
            className='justify-center items-start px-4 py-3.5 mt-2.5 bg-white border-2 border-gray-200 border-solid max-md:pr-5  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer'
            pattern='.{7,}'
            required
          />
          <span className='mt-2 hidden text-sm text-red-300 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
            Please enter your phone number
          </span>
          {/* <label htmlFor='message' className='sr-only'>
            our Message
          </label> */}
          <Textarea
            name='message'
            rows='2'
            placeholder='Your Message'
            className='flex gap-5 justify-end py-1.5 pr-1.5 pl-4 mt-2.5 bg-white border-2 border-gray-200 border-solid max-h-1.5'
            id=''></Textarea>
          <button
            type='submit'
            className='self-end -mt-8 group-invalid:pointer-events-none'>
            <img
              loading='lazy'
              src={rightArrowDark}
              alt=''
              className='shrink-0 w-6 aspect-square'
            />
          </button>
        </div>
      </form>
      {formError ? <h6 className='hidden'>{formError}</h6> : ""}
    </>
  );
};

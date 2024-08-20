import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import arrowIcon from "../assets/arrow-icon.svg";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

export default function BookSheet({ children }) {
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const form = useRef();
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
  const [openBooking, setOpenBooking] = useState(false);
  return (
    <Sheet open={openBooking} onOpenChange={setOpenBooking}>
      <SheetTrigger asChild>
        {children ? (
          children
        ) : (
          <Button className='rounded-none hover:bg-white hover:text-black flex min-w-[200px] gap-2 justify-center items-center self-stretch px-3.5 py-3 text-xs bg-violet-700 max-md:px-5'>
            <span>Book a Free Consultation </span>
            <img
              loading='lazy'
              src={arrowIcon}
              alt=''
              className='shrink-0 aspect-[1.59] w-[27px]'
            />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent
        side='top'
        className='bg-black text-white max-h-[100vh] overflow-y-auto'>
        <section className='flex justify-center items-center px-10 md:py-6 max-md:px-5'>
          <div className='flex gap-5 justify-between w-full max-w-[1196px] max-md:flex-wrap max-md:max-w-full'>
            <div className='flex flex-col self-start mt-24 text-white max-md:mt-0'>
              <h2 className='mt-4 text-base font-medium max-md:mt-1'>
                Best Website Design and Development Agency in Dubai
              </h2>
              <p className='mt-4 text-sm max-md:mt-1'>
                Transform your online presence with Webtek Digital, a
                leading website design company in Dubai. We offer
                diverse web design and development services tailored
                to your business's uniqueness, focusing on dynamic,
                mobile-responsive designs that convert visitors into
                valuable leads. With a commitment to delivering
                tailored digital solutions, our expertise ensures your
                brand stands out in the online sphere. Elevate your
                business with our professional web design services,
                attracting customers, creating engagement, and
                flourishing across the Middle East. With over 15 years
                of experience, we have the tools and expertise to
                launch your distinct online identity and help you
                thrive in the digital landscape.
              </p>
            </div>
            <div className='flex flex-col min-w-[300px] basis-1/3 px-8 py-11 max-md:py-1 text-base font-light bg-white max-md:px-5 max-md:max-w-full'>
              <div className='flex gap-5 justify-between w-full text-4xl font-bold max-md:flex-wrap max-md:max-w-full'>
                <h1 className='text-black'>
                  Book A{" "}
                  <span className='text-white font-outline-1 '>
                    Demo
                  </span>
                </h1>
              </div>
              {formSuccess ? (
                <h2 className='text-center text-black text-l mt-5'>
                  Thank you for contacting us! <br />
                  We will contact you ASAP.
                </h2>
              ) : (
                <>
                  <form
                    ref={form}
                    noValidate={true}
                    className='mt-5 max-md:mt-1 group'
                    onSubmit={handleSubmit}>
                    <Input
                      type='text'
                      id='fullName'
                      placeholder='Full Name'
                      name='fullname'
                      className='rounded-none mt-1 md:mt-3 border-t-0 border-r-0 border-l-0 border-black text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer'
                      pattern='.{7,}'
                      required
                    />
                    <span className='mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                      Please enter at least 7 characters
                    </span>

                    <Input
                      type='email'
                      placeholder='Business Email'
                      id='email'
                      className='rounded-none mt-1 md:mt-3 border-t-0 border-r-0 border-l-0 border-black text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer'
                      pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                      required
                    />
                    <span className='mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                      Please enter a valid email address
                    </span>

                    <Input
                      type='tel'
                      id='phone'
                      placeholder='Phone Number'
                      name='phone'
                      className='rounded-none mt-1 md:mt-3 border-t-0 border-r-0 border-l-0 border-black text-black invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer'
                      pattern='.{7,}'
                      required
                    />
                    <span className='mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                      Please enter your phone number
                    </span>

                    <Input
                      type='text'
                      id='company'
                      placeholder='Company Name'
                      name='company'
                      className='rounded-none mt-1 md:mt-3 border-t-0 border-r-0 border-l-0 border-black text-black'
                    />

                    <Textarea
                      id='message'
                      placeholder='Message'
                      name='message'
                      className='rounded-none mt-1 max-md:min-h-[30px] md:mt-3 border-t-0 border-r-0 border-l-0 border-black text-black'
                    />

                    <Button
                      type='submit'
                      className='rounded-none hover:bg-white hover:text-black flex gap-2 self-start px-5 py-3 mt-12 text-base font-medium text-white whitespace-nowrap bg-violet-700 max-md:px-5 max-md:mt-10  group-invalid:pointer-events-none'>
                      <span>Submit</span>
                      <img
                        loading='lazy'
                        src={arrowIcon}
                        alt=''
                        className='shrink-0 self-start aspect-[1.49] w-[27px]'
                      />
                    </Button>
                  </form>

                  {formError ? (
                    <h6 className='hidden'>{formError}</h6>
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
}

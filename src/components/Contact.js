import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hvt5gif",
        "template_7v80vw7",
        formRef.current,
        "RJFuEOZHqYk7ZQqfs"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Unable to send message!");
        }
      );
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-10 mx-auto text-center md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-5xl text-3xl font-bold title-font mb-3 text-black">
            Contact Info
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-2xl font-bold leading-relaxed text-dark-orange"
          >
            Let's keep in touch!
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full mx-auto bg-darkblue p-6 rounded-2xl shadow-lg">
          {/* Left Side - Contact Details */}
          <div className="p-4 w-full text-center md:w-1/2 lg:w-2/5 bg-opacity-20 rounded-xl">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="true"
              className="text-2xl lg:text-3xl text-dark-orange font-semibold mb-4"
            >
              Get in Touch
            </h1>

            <div
              className="flex gap-5 mb-5 justify-center"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="true"
            >
            <SocialHandles color="text-white" />
</div>

            {/* Phone */}
            <div
              className="flex items-center justify-center gap-3 mb-4 p-2 transition-transform duration-300 hover:scale-105"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <FaPhoneAlt className="text-white text-lg" />
              <p className="text-white text-lg">{ContactData.phone}</p>
            </div>

            {/* Email */}
            <div
              className="flex items-center justify-center gap-3 mb-4 p-2 transition-transform duration-300 hover:scale-105"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <FaEnvelope className="text-white text-lg" />
              <a
                href={`mailto:${ContactData.email}`}
                className="text-white text-lg hover:underline"
              >
                {ContactData.email}
              </a>
            </div>

            {/* Address */}
            <div
              className="flex items-center justify-center gap-3 p-2 transition-transform duration-300 hover:scale-105"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <FaMapMarkerAlt className="text-white text-lg" />
              <p className="text-white text-lg">{ContactData.address}</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col p-6 w-full md:w-1/2 lg:w-3/5 bg-whitesmoke rounded-xl shadow-md"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="mb-4">
              <input
                required
                placeholder="Your Name"
                type="text"
                name="user_name"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 text-lg outline-none text-black p-3 transition-transform duration-300 ease-in-out shadow-sm hover:shadow-md"
              />
            </div>

            <div className="mb-4">
              <input
                required
                placeholder="Your Email"
                type="email"
                name="user_email"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 text-lg outline-none text-black p-3 transition-transform duration-300 ease-in-out shadow-sm hover:shadow-md"
              />
            </div>

            <div className="mb-4">
              <textarea
                required
                placeholder="Your Message"
                name="message"
                className="w-full bg-white rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 h-32 text-lg outline-none text-black p-3 resize-none transition-transform duration-300 ease-in-out shadow-sm hover:shadow-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mx-auto mt-4 px-12 py-3 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

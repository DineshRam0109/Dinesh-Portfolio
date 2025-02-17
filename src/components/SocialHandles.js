import React from "react";
import ContactData from "../data/contact";

const SocialHandles = ({ color = "text-black" }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-once="false"
      className="flex gap-5 my-4"
    >
      {ContactData?.links?.map((link, index) => (
        <a
          key={index}
          className={`transition duration-700 hover:scale-125 ${color} text-2xl md:text-xl`}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;

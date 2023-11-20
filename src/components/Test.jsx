import React from "react";
import Marquee from "react-fast-marquee";

import Testimonial from "./Testimonial.astro";

const testimonials = [
  {
    img: "https://framerusercontent.com/images/iV0D0WBbS40fnL4cieaU5hXDbo.webp",
    name: "azdxxazda",
    role: "xxxxxxxxxx",
    text: "The client has learned to trust Halo Lab, thanks to their significant knowledge in UI/UX design. The vendor has provided valuable feedback by always being readily available for communication. Moreover, they have a satisfying project management process that makes their process smooth and efficient.",
    alt: "avatar of zemium",
  },
  {
    img: "https://framerusercontent.com/images/iV0D0WBbS40fnL4cieaU5hXDbo.webp",
    name: "azdazda",
    role: "xxxxxxxxxx",
    text: "The client is proud of Halo Lab's work, which their customers have praised. They lead a communicative process to enable the team to reach out to them at any time. The client also praises their designs and suggestions, which help improve their services.",
    alt: "avatar of zemium",
  },
  {
    img: "https://framerusercontent.com/images/iV0D0WBbS40fnL4cieaU5hXDbo.webp",
    name: "azdazda",
    role: "xxxxxxxxxx",
    text: "Their skills were awesome — they took what I said and made it real. The designs ended up helping the internal stakeholders raise funds. The specialists maintained excellent project management skills throughout the process.",
    alt: "avatar of zemium",
  },
];

const Test = () => (
  <div class='flex space-x-10'>
    {" "}
    <Marquee>
      {testimonials.map((item, index) => (
        <div key={index} class='flex-none'>
          <Testimonial
            name={item.name}
            role={item.role}
            text={item.text}
            img={item.img}
            alt={item.alt}
          />
        </div>
      ))}{" "}
    </Marquee>
  </div>
);

export default Test;

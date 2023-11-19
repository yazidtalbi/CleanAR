import { Marquee } from "dynamic-marquee";
import Ticker from "framer-motion-ticker";

export default function Projet(props) {
  return (
    <>
      <hr class='h-px bg-gray-300 border-0 mx-20' />
      <section class='pb-24'>
        <div class='flex justify-between max-w-screen-xl mx-auto py-16'>
          <div class='w-1/3'>
            <p class='font-normal text-gray-500 text-xl leading-relaxed py-0 w-2/3'>
              {props.description}
            </p>
          </div>
          <div class='w-1/3 self-center'>
            <h1 class='title-font text-4xl font-semibold text-gray-900 mb-3 text-center'>
              {props.title}
            </h1>
          </div>
          <div class='flex space-x-3 h-full self-center w-1/3 justify-end'>
            {props.tags.map((item, index) => (
              <div
                class='bg-gray-300/50 text-gray-800 text-xl font-medium px-4 py-1.5 rounded-full'
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div class='marquee w-screen overflow-hidden -mx-6'>
          <div class='marquee-content'>
            <Ticker duration={50}>
              {props.list.map((item, index) => (
                <div key={index} class='flex-none'>
                  <img
                    src={item.url}
                    alt={item.alt}
                    class='object-cover h-[70vh] rounded-xl ml-5'
                  />
                </div>
              ))}
            </Ticker>
          </div>
        </div>
      </section>
    </>
  );
}

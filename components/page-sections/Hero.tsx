import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="pt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-start space-y-8">
          <div className="relative">
            <Image
              src="/LogoIconWhite.png"
              alt="logo"
              width={35}
              height={35}
              className="absolute top-0 left-[-50px]"
            />
            {/* Description Text */}
            <p className="text-gray-500 text-3xl font-semibold leading-tight max-w-3xl">
              <span className="text-white">Work Done</span> is a software
              company that helps other companies and development teams outsource
              tasks so that they can focus on fast development and getting
              things done. Ship new features with the speed of light.
            </p>
          </div>

          {/* CTA Section */}
          <div className="w-full flex flex-col justify-between sm:flex-row pt-4">
            {/* Button */}
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <button className="w-full sm:w-48 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-200">
                I'm Interested!
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Start shipping your product!
              </p>
            </div>

            {/* Taught By Section */}
            <div>
              <a
                className="flex justify-center items-center cursor-pointer space-x-2"
                href="https://www.linkedin.com/in/n-huzaifa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-full"
                  alt="Founder Profile"
                  width={40}
                  height={40}
                  src={"/Founder.png"}
                />
                <span className="text-gray-500">
                  Founder: <span className="font-bold text-gray-300">Noor</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

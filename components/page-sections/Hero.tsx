import { MoonIcon, SunDimIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = ({theme, toggleTheme}: {theme: string | undefined, toggleTheme: () => void}) => {
  
  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="pt-8 md:pt-24 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-start w-full space-y-8">
          <div className="relative w-full">
            <Image
              src={theme === 'light' ? "/LogoIconBlack.png" : "/LogoIconWhite.png"}
              alt="logo"
              width={35}
              height={35}
              className="md:absolute mb-7  md:top-0 md:left-[-50px]"
            />
            {/* Description Text */}
            <p className="dark:text-[#616161] text-gray-400 text-[2.3em] font-semibold leading-tight w-full">
              <span className="dark:text-[#FBFBFB] text-gray-900">Work Done</span> is a software
              company that helps other companies and development teams outsource
              tasks so that they can focus on fast development and getting
              things done. Ship new features with the speed of light.
            </p>
          </div>

          {/* CTA Section */}
          <div className="w-full flex flex-col justify-between sm:flex-row pt-4">
            {/* Button */}
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <button 
              onClick={handleScrollToPricing}
              className="w-full sm:w-48 dark:bg-gray-100 bg-gray-900 dark:text-gray-800 text-white rounded hover:opacity-90 font-bold py-3 px-6 transition duration-200">
                I'm Interested!
              </button>
              <p className="text-sm dark:text-gray-500 text-gray-600 mt-2">
                Start shipping your product!
              </p>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-start gap-5">
              <div className="w-full sm:w-auto">
                <button 
                  onClick={toggleTheme} 
                  className="dark:bg-gray-900 bg-gray-100 dark:text-gray-300 text-gray-800 rounded-full p-[9px] transition duration-200 hover:opacity-80"
                >
                  {theme === "light" ? <MoonIcon size={24} /> : <SunDimIcon size={24} />}
                </button>
              </div>
              <a
                className="flex items-center cursor-pointer space-x-2"
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
                  Founder: <span className="font-bold text-gray-600">Noor</span>
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

import gif1 from "../assets/hero.gif";
import tgImg from "../files/telegram.svg";
import xImg from "../files/square-x-twitter.svg";
import Image from "next/image";
import localFont2 from "next/font/local";

const myFont2 = localFont2({ src: "../files/ComicNeue-Bold.ttf" });

const Footer = () => {
  return (
    <>
      <div className="bg-orange-500 flex flex-col sm:flex-row justify-center px-4 sm:px-10 gap-4 sm:gap-10">
        <div className="flex items-center justify-center sm:justify-start gap-5">
          <a
            href="https://t.me/birddogentry"
            className="text-white hover:text-gray-400 hover:opacity-75"
            target="_blank"
          >
            <Image
              src={tgImg}
              alt="telegram logo"
              priority
              height={50}
              width={50}
              layout="fixed"
              className="filter invert" 
            />
          </a>
          <a
            href="https://twitter.com/SOLbirddog"
            className="text-white hover:text-gray-400 hover:opacity-75"
            target="_blank"
          >
            <Image
              src={xImg}
              alt="x logo"
              priority
              height={50}
              width={50}
              layout="fixed"
              className="filter invert" 
            />
          </a>
        </div>

        <div className="flex justify-center">
          <Image
            src={gif1}
            alt="x logo"
            priority
            height={250}
            width={250}
            layout="fixed"
          />
        </div>
      </div>
      <footer className="bg-yellow-400 p-4">
        <div className="container mx-auto text-center">
          <p>© 2024 BIRDDOG COMMUNITY. All rights reserved.</p>
          <p className={myFont2.className}>Powered by <a className="underline hover:text-orange-500" href="https://twitter.com/3ngaging" target="_blank">@3ngaging</a>. Developer.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import Link from "next/link";
import Image from "next/image";
import tgImg from '../assets/tg_yellow.svg';
import xImg from '../assets/x_yellow.svg';

const Nav = () => {
  return (
    <nav className="bg-orange-500 p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side navigation */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-50 bg-orange-400 hover:bg-yellow-800 p-2 px-5 border-white-400 rounded-3xl border-2">Home</Link>
          </li>
          <li>
            <Link href="/meme-generator" className="hover:text-gray-50 bg-orange-400 hover:bg-yellow-800 p-2 px-5 border-white-400 rounded-3xl">Meme Generator</Link>
          </li>
          <li>
            {/* "Coming Soon..." button without a path */}
            <span className="cursor-not-allowed text-yellow-800 bg-orange-400 p-2 px-5 border-white-400 rounded-3xl">Coming Soon...</span>
          </li>
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          {/* Placeholder for social media icons */}
          <a href="https://t.me/birddogentry" className="hover:opacity-75">
            <Image src={tgImg} alt="telegram logo" priority height={"32"}/>
          </a>
          <a href="https://twitter.com/SOLbirddog" className="hover:opacity-75">
            <Image src={xImg} alt="x logo" priority height={"32"}/>
          </a>

          {/* BUY NOW button */}
          <button className="hover:text-gray-50 bg-orange-400 hover:bg-yellow-800 p-2 px-5 border-yellow-400 rounded-3xl border-4 text-xl">
            BUY NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

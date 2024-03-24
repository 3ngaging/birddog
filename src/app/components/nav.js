import Link from "next/link";
import Image from "next/image";
import tgImg from '../files/telegram.svg';
import xImg from '../files/square-x-twitter.svg';

const Nav = () => {
  return (
    <nav className="bg-orange-500 p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side navigation */}
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/meme-generator" className="hover:text-gray-300">Meme Generator</Link>
          </li>
          <li>
            {/* "Coming Soon..." button without a path */}
            <span className="cursor-not-allowed hover:text-gray-300">Coming Soon...</span>
          </li>
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          {/* Placeholder for social media icons */}
          <a href="https://t.me/birddogentry" className="text-yellow-500 hover:text-gray-400">
            <Image src={tgImg} alt="telegram logo" priority height={"32"}/>
          </a>
          <a href="https://twitter.com/SOLbirddog" className="text-yellow-500 hover:text-gray-400">
            <Image src={xImg} alt="x logo" priority height={"32"}/>
          </a>

          {/* BUY NOW button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            BUY NOW
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

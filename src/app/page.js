"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import bdImage from "./assets/birddog_character_bgSol.png";
import partner1 from "./assets/partner1.svg";
import partner2 from "./assets/partner2.svg";
import partner3 from "./assets/partner3.svg";
import partner4 from "./assets/partner4.svg";
import partner5 from "./assets/partner5.svg";
import partner6 from "./assets/partner6.svg";
import gif1 from "./assets/circle.gif";
import maps from "./assets/maps.svg";
import text_bird from "./assets/BIRD DOG.svg";
import localFont2 from "next/font/local";
import ClipboardCopyComponent from "./components/clipboard";
import drawImg from "./assets/draw.jpg";
// import { Tweet } from "react-tweet";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const myFont2 = localFont2({ src: "./files/ComicNeue-Bold.ttf" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 bg-black">
      <div className="mt-12">
        <Image src={text_bird} alt="Bird Dog text" priority />
      </div>
      <Image src={bdImage} alt="Bird Dog logo" priority />
      <div className="lg:px-32 sx:px-5 mt-10 mb-5">
        {/* Container to control width */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl text-center">
            Matt Furie’s <span className="from-purple-500 to-emerald-400 bg-gradient-to-r bg-clip-text text-transparent">5<span className="from-purple-500 to-emerald-400 bg-gradient-to-r bg-clip-text text-transparent text-sm align-[top]">th</span> OG </span>{" "}
            character
          </h2>
          {/* <div className={myFont2.className}>
            <p className="mt-5 text-justify">
              {`Bird Dog, the enigmatic 5th member of the "Boy's Club" and Matt
              Furie's favored creation, stands as a testament to the comic's
              rich tapestry of humor and absurdity. With his unpredictable
              antics and mysterious aura, Bird Dog adds a layer of intrigue and
              whimsy, elevating the narrative with his unique perspective on the
              slacker lifestyle and psychedelic escapades. His presence enriches
              the dynamic interplay among the characters, offering a fresh lens
              through which to explore the themes of friendship, adventure, and
              the surreal aspects of everyday life.`}
            </p>
          </div> */}
        </div>
      </div>
      {/* <Image src={Video} alt="Bird Dog logo" priority /> */}
      {/* <VideoPlayer url={Video}/> */}
      <div className="flex flex-wrap justify-center gap-5 mb-12">
        <Image className="shadow-2xl shadow-purple-800" src={drawImg} alt="Bird Dog draw" 
                width={650}
                height={650} priority />
      </div>
      <div className="px-4 sm:px-10 lg:px-32 mt-5 lg:mb-20 md:mb-12">
        {/* Container to control width */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl text-center">
            OUR <span className="from-purple-500 to-emerald-400 bg-gradient-to-r bg-clip-text text-transparent">PARTNERS </span>
            AND <span className="from-purple-500 to-emerald-400 bg-gradient-to-r bg-clip-text text-transparent">DEX</span>
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-5">
            <a className="w-1/2 sm:w-auto" href="https://dexscreener.com/solana/dthr9wws7qvufswtabmbx7srpzejpjgdy6ctb631kpgf" target="_blank">
              <Image
                src={partner1}
                alt="partner 1"
                width={350}
                height={350}
                layout="intrinsic"
                priority
                className="hover:opacity-80 cursor-pointer"
              />
            </a>
            <a className="w-1/2 sm:w-auto" href="https://coinmarketcap.com/es/currencies/bird-dog/" target="_blank">
              <Image
                src={partner2}
                alt="partner 2"
                width={350}
                height={350}
                layout="intrinsic"
                priority
                className="hover:opacity-80 cursor-pointer"
              />
            </a>
            <a className="w-1/2 sm:w-auto" href="https://jup.ag/swap/SOL-BIRDDOG" target="_blank">
              <Image
                src={partner3}
                alt="partner 3"
                width={350}
                height={350}
                layout="intrinsic"
                priority
                className="hover:opacity-80 cursor-pointer"
              />
            </a>
            <a className="w-1/2 sm:w-auto" href="https://t.me/bonkbot_bot?start=ref_birddog" target="_blank">
              <Image
                src={partner4}
                alt="partner 4"
                width={350}
                height={350}
                layout="intrinsic"
                priority
                className="hover:opacity-80 cursor-pointer"
              />
            </a>
            <a className="w-1/2 sm:w-auto" href="https://avedex.cc/token/3XTp12PmKMHxB6YkejaGPUjMGBLKRGgzHWgJuVTsBCoP-solana?from=Default" target="_blank">
              <Image
                src={partner5}
                alt="partner 5"
                width={350}
                height={350}
                layout="intrinsic"
                priority
                className="hover:opacity-80 cursor-pointer"
              />
            </a>
            <a className="w-1/2 sm:w-auto" href="https://birdeye.so/token/J98NfYDZdZirkahW79nihciRjnGjhT6znCK1kAuZfeHM?chain=solana" target="_blank">
              <Image
                src={partner6}
                alt="partner 6"
                width={350}
                height={350}
                layout="intrinsic"
                priority
                className="hover:opacity-80 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:px-32 sx:px-5 mt-10 lg:mb-20 mb-12">
        {/* Container to control width */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl text-center">
            Community Driven <span className="from-purple-500 to-emerald-400 bg-gradient-to-r bg-clip-text text-transparent">$birddog</span>
          </h2>
          <div className={myFont2.className}>
            <p className="mt-5 text-justify">
              {`The $BIRDDOG token, emerging resiliently from the shadows of a
        developer rug pull, has been fervently embraced by its community,
        now driving its trajectory with unwavering commitment and vision.
        This digital asset, now entirely in the hands of its dedicated
        holders, symbolizes the power of collective belief and action,
        showcasing a remarkable turnaround to become 100% community-led
        and thriving against all odds. Through collaborative effort and
        shared governance, the $BIRDDOG community exemplifies the strength
        and potential of decentralized finance when united by a common
        purpose and trust.`}
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-32 mt-5 lg:mb-20 mb-12 flex flex-col items-center">
        <div className="mb-5 flex justify-center">
          <Image
            src={gif1}
            alt="Bird Dog logo"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className={`${myFont2.className} w-full max-w-md mx-auto`}>
          <ClipboardCopyComponent />
        </div>
      </div>

      {/* <div className="lg:px-4 md:px-32 mt-5 mb-20 flex flex-col items-center">
        <div className="text-center mb-5">
          <h2 className="text-5xl text-center">how to buy?</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center md:text-right">
          <Image src={maps} alt="map" width={250} priority />
          <div className="flex flex-col gap-5 items-center md:items-end">
            <div className={myFont2.className}>
              <p className="text-justify w-full lg:max-w-[30rem] mb-5">
                {`To buy $BIRDDOG tokens, start by sending Solana (SOL) to a Solana-compatible wallet. Then, use a decentralized exchange like Jupiter to swap SOL for $BIRDDOG. After acquiring your tokens, hold them in your wallet and immerse yourself in the vibrant $BIRDDOG community on Telegram and Twitter, where sharing and engaging enhances your experience. This journey not only brings you closer to the world of decentralized finance but also connects you with like-minded enthusiasts in the $BIRDDOG ecosystem.`}
              </p>
            </div>
            <a
              className="inline-block bg-gradient-to-r from-purple-500 to-teal-400 hover:opacity-75 p-2 px-5 border-4 border-white rounded-3xl text-md"
              href="https://t.me/birddogentry"
            >
              join the community
            </a>
          </div>
        </div>
      </div> */}
    </main>
  );
}

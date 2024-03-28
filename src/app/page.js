"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import bdImage from "./assets/bd_c.svg";
import partner1 from "./assets/partner_1.svg";
import partner2 from "./assets/partner_2.svg";
import gif1 from "./assets/circle.gif";
import maps from "./assets/maps.svg";
import text_bird from "./assets/BIRD DOG.svg";
import localFont2 from "next/font/local";
import ClipboardCopyComponent from "./components/clipboard";
// import { Tweet } from "react-tweet";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const myFont2 = localFont2({ src: "./files/ComicNeue-Bold.ttf" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 bg-orange-500">
      <div className="mt-12 mb-10">
        <Image src={text_bird} alt="Bird Dog text" priority />
      </div>
      <Image src={bdImage} alt="Bird Dog logo" priority />
      <div className="lg:px-32 sx:px-5 mt-10 lg:mb-20 md:mb-12">
        {/* Container to control width */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl text-center">
            Matt Furie’s <span className="text-yellow-400">favourite</span>{" "}
            character
          </h2>
          <div className={myFont2.className}>
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
          </div>
        </div>
      </div>
      {/* <Image src={Video} alt="Bird Dog logo" priority /> */}
      {/* <VideoPlayer url={Video}/> */}
      <div className="lg:mb-20 md:mb-12 w-full flex justify-center">
        <ReactPlayer
          url="https://vimeo.com/927249912"
          controls
          className="react-player"
        />
      </div>
      <div className="px-4 sm:px-10 lg:px-32 mt-5 lg:mb-20 md:mb-12">
        {/* Container to control width */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl text-center">
            OUR <span className="text-yellow-400">PARTNERS</span>
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-5">
            <div className="w-1/2 sm:w-auto">
              <Image
                src={partner1}
                alt="partner 1"
                width={350}
                height={350}
                layout="intrinsic"
                priority
              />
            </div>
            <div className="w-1/2 sm:w-auto">
              <Image
                src={partner2}
                alt="partner 2"
                width={350}
                height={350}
                layout="intrinsic"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-32 sx:px-5 mt-10 lg:mb-20 mb-12">
        {/* Container to control width */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl text-center">
            Community Driven <span className="text-yellow-400">$birddog</span>
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

      <div className="lg:px-4 md:px-32 mt-5 mb-20 flex flex-col items-center">
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
              className="inline-block border-4 border-yellow-400 text-white text-md rounded-3xl focus:ring-yellow-500 dark:bg-amber-500 p-2 hover:bg-yellow-700 hover:text-gray-200"
              href="https://t.me/birddogentry"
            >
              join the community
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import bdImage from "./files/BD_C.png";
import localFont2 from "next/font/local";
// import { Tweet } from "react-tweet";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const myFont2 = localFont2({ src: "./files/ComicNeue-Bold.ttf" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 bg-orange-500">
      <h1 className="xl:text-15xl md:text-9xl sm:text-9xl text-7xl">
        BIRD DOG
      </h1>
      <Image src={bdImage} alt="Bird Dog logo" priority />
      <div className="px-32 mt-5 mb-20">
        {/* Container to control width */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl text-center">
            Matt Furie’s <span className="text-yellow-400">favourite</span>{" "}
            character
          </h2>
          <div className={myFont2.className}>
            <p className="mt-5 text-justify">
              Bird Dog, the enigmatic 5th member of the "Boy's Club" and Matt
              Furie's favored creation, stands as a testament to the comic's
              rich tapestry of humor and absurdity. With his unpredictable
              antics and mysterious aura, Bird Dog adds a layer of intrigue and
              whimsy, elevating the narrative with his unique perspective on the
              slacker lifestyle and psychedelic escapades. His presence enriches
              the dynamic interplay among the characters, offering a fresh lens
              through which to explore the themes of friendship, adventure, and
              the surreal aspects of everyday life.
            </p>
          </div>
        </div>
      </div>

      {/* <Image src={Video} alt="Bird Dog logo" priority /> */}
      {/* <VideoPlayer url={Video}/> */}
      <div className="mb-20 w-full flex justify-center">
        <ReactPlayer
          url="https://vimeo.com/927249912"
          controls
          className="react-player"
        />
      </div>
      <div className="px-32 mt-5 mb-20">
        {/* Container to control width */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl text-center">
            Community Driven <span className="text-yellow-400">$birddog</span>
          </h2>
          <div className={myFont2.className}>
            <p className="mt-5 text-justify">
            The $BIRDDOG token, emerging resiliently from the shadows of a developer rug pull, has been fervently embraced by its community, now driving its trajectory with unwavering commitment and vision. This digital asset, now entirely in the hands of its dedicated holders, symbolizes the power of collective belief and action, showcasing a remarkable turnaround to become 100% community-led and thriving against all odds. Through collaborative effort and shared governance, the $BIRDDOG community exemplifies the strength and potential of decentralized finance when united by a common purpose and trust.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

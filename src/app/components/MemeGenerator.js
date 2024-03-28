import React, { useState, useEffect } from "react";
// import styles from '../styles/MemeGenerator.module.css';

const memes = [
  "meme1.jpg",
  "meme2.jpg",
  "meme3.jpg",
  "meme4.jpg",
  "meme5.jpg",
  "meme6.jpg",
  "meme7.jpg",
];

const MemeGeneratorComponent = () => {
  const [currentMeme, setCurrentMeme] = useState("");

  useEffect(() => {
    loadRandomMeme();
  }, []);

  const loadRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setCurrentMeme(`/memes/${memes[randomIndex]}`);
  };

  const downloadMeme = () => {
    const anchor = document.createElement("a");
    anchor.href = currentMeme;
    anchor.download = "bird-dog-meme.jpg"; // Customize as needed
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const tweetMeme = () => {
    const tweetText = "Let @SOLbirddog fly high!\n\n$BIRDDOG #BIRDDOG";
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mb-20 mt-5">
      <div className="">
        {currentMeme && (
          <img
            src={currentMeme}
            alt="Meme"
            className="w-auto max-h-[500px] h-auto mx-auto border-4 border-yellow-400 rounded-md overflow-hidden"
          />
        )}
      </div>
      <div className="flex flex-wrap justify-between mt-5 gap-4">
        <button
          onClick={loadRandomMeme}
          className="hover:text-gray-50 bg-orange-400 hover:bg-yellow-800 p-2 px-5 rounded-3xl border-4 border-yellow-400 text-xl flex-1 sm:flex-none sm:px-5 flex gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          Reload
        </button>
        <button
          onClick={downloadMeme}
          className="hover:text-gray-50 bg-orange-400 hover:bg-yellow-800 p-2 px-5 rounded-3xl border-4 border-yellow-400 text-xl flex-1 sm:flex-none sm:px-5 flex gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Download
        </button>
        <button
          onClick={tweetMeme}
          className="hover:text-gray-50 bg-orange-400 hover:bg-yellow-800 p-2 px-5 rounded-3xl border-4 border-yellow-400 text-xl flex-1 sm:flex-none sm:px-5 flex gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          Post
        </button>
      </div>
    </div>
  );
};

export default MemeGeneratorComponent;

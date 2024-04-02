import { useState, useRef } from "react";

export default function ClipboardCopyComponent() {
  const [copySuccess, setCopySuccess] = useState(false);
  const inputRef = useRef(null);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText("4mTyCE6nfZfbWuHdCYmQYtQwKUmNGkXWKoGem38tofEt")
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Reset tooltip message after 2 seconds
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="w-full max-w-[20rem]">
      <div className="relative">
        <label htmlFor="npm-install-copy-button" className="sr-only">
          Label
        </label>
        <input
          ref={inputRef}
          id="npm-install-copy-button"
          type="text"
          className="text-center col-span-6 border-4 bg-gradient-to-r from-purple-500 to-teal-400 text-white text-md rounded-3xl  block w-full p-2.5  placeholder-white"
          value="4mTyCE6nfZf...Gem38tofEt"
          disabled
          readOnly
        />
        <button
          onClick={handleCopyClick}
          className="absolute end-2 top-1/2 -translate-y-1/2 text-white hover:bg-gray-100 hover:bg-purple-800 rounded-2xl p-2 inline-flex items-center justify-center"
        >
          {copySuccess ? (
            <span className="inline-flex items-center">
              {/* Success Icon */}
              <svg
                className="w-3.5 h-3.5 text-green-500 text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917L5.724 10.5 15 1.5"
                />
              </svg>
            </span>
          ) : (
            <span>
              {/* Default Icon */}
              <svg
                className="w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
          )}
        </button>
        <div
          className={`absolute z-10 ${
            copySuccess ? "visible opacity-100" : "invisible opacity-0"
          } inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip bg-gray-700`}
        >
          {copySuccess ? "Copied!" : "Copy to clipboard"}
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
}

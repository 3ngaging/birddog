"use client";
import React from 'react';
import MemeGeneratorComponent from '../components/MemeGenerator';
// Import other required components or hooks

export default function MemeGenerator() {
  return (
    <main className="flex flex-col items-center px-5 bg-black text-white">
      <h1 className='text-5xl text-center mt-5'>Meme <spam className="from-purple-500 to-emerald-400 bg-gradient-to-r bg-clip-text text-transparent">Generator</spam></h1>
      <MemeGeneratorComponent/>
    </main>
  );
}
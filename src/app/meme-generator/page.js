"use client";
import React from 'react';
import MemeGeneratorComponent from '../components/MemeGenerator';
// Import other required components or hooks

export default function MemeGenerator() {
  return (
    <main className="flex flex-col items-center px-5 bg-orange-500">
      <h1 className='text-5xl text-center mt-5'>Meme Generator</h1>
      <MemeGeneratorComponent/>
    </main>
  );
}
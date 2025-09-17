// rafce
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Home Page</h1>

      <Image
        src="/abdul.jpg"
        alt="Hero Image"
        width={200}
        height={100}
        className="rounded shadow-md"
      />

      <p className="text-lg text-center max-w-xl mt-4">
        This is a simple home page built using Next.js 15, TypeScript, and Tailwind CSS.
      </p>

      <div className="mt-4 text-center max-w-xl">
        <p className="text-lg font-bold">Assalam-o-Alaikum</p>
        <p className="text-base mt-2">
          Mera naam <strong>Abdul Rehman</strong> hai aur mere walid ka naam <strong>Muhammad Usman</strong> hai.
          Woh ek shopkeeper hain. Hum Chiniot ki tehsil <strong>Lalian</strong> mein rehtay hain 
          aur main <strong>17 saal</strong> ka hoon.
        </p>
      </div>
    </main>
  );
};

export default HomePage;

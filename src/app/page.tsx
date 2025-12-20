"use client";
import { useState } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Blur the whole homepage when menu is open */}
      <div
        className={`${
          isMenuOpen
            ? "filter blur-sm pointer-events-none transition-filter duration-300"
            : "transition-filter duration-300"
        }`}
      >
        <HomePage />
      </div>
    </div>
  );
}

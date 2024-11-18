"use client";
import { motion } from "framer-motion";
import StickyHeader from "./components/sticky-header";
import { RevealBento } from "./components/about-me";
import Example from "./components/horizontal-scroller";

export default function Home() {
  return (
    <div>
      <StickyHeader />

      <div
        className="bg-contain bg-repeat pt-[80vh]"
        style={{ backgroundImage: "url('./background.svg')" }}
      >
        {/* <RevealBento /> */}
      </div>
      <Example />
      <RevealBento />
    </div>
  );
}

import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="mx-auto max-w-7xl w-full py-12 h-screen">
        Hello, world!
      </main>
    </>
  );
}

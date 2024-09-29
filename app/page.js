import Image from "next/image";
import backgroundImage from "@/assets/maria.png"; // Update this path

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-[-2]">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-[-1]"></div>
      
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative z-10">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ol className="list-inside list-none text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-4">
              <h1 className="text-[50px] font-bold font-serif">SHALOM</h1>
            </li>
            <li> <h1>This is a community of prayer warriors who intercede through <strong> MARY OUR MOTHER </strong></h1></li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/2000hailmary"
              target="_blank"
              rel="2000 hailmary"
            >
              2000 hailmary
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex text-[#858585] items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/"
              target="_blank"
              rel="FLAME"
            >
              Flame of love
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
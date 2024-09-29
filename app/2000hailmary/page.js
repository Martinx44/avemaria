'use client';
import Link from 'next/link';
import Image from "next/image";
import NextButton from '@/components/NextButton';
import PrevButton from '@/components/PrevButton';
import backgroundImage from "@/assets/maria.png";
import React, { useState } from 'react';
import { petition } from '@/constants/index'

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < petition.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentItem = petition[currentIndex];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="absolute inset-0 z-[-2]">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
        
          <div className="grid grid-col items-center justify-center p-2 bg-slate-100/90 shadow-lg">
          <ol className='flex justify-around mt-3 text-blue-400 ring-1 rounded-sm'>
                <li>
                  <Link href="/2000hailmary/about" className="block w-full h-full">
                    About prayer
                  </Link>
                </li>
                <li>
                  <Link href="/2000hailmary/opening" className="block w-full h-full">
                      Opening prayer
                  </Link>
                </li>
                <li>
                  <Link href="/2000hailmary/divinemercy" className="block w-full h-full">
                    3:00
                  </Link>
                </li>
                <li>
                  <Link href="/2000hailmary/hymn" className="block w-full h-full">
                    hymn
                  </Link>
                </li>
                <li>
                  <Link href="/2000hailmary/closing" className="block w-full h-full">
                    closing prayer
                  </Link>
                </li>
      
            </ol>
            <div className='flex justify-between mt-4 gap-4 '>
              <div>
                {currentIndex > 0 && (
                  <PrevButton onClick={handlePrev} />
                )}
              </div>
                
              <p>{currentItem.id}</p>

              <div>
                {currentIndex < petition.length - 1 && (
                  <NextButton onClick={handleNext} />
                )}
              </div>
                
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-8">
              <p className="text-black text-2xl font-bold text-center">
                {currentItem.title}
              </p>
              <p className="text-lg text-center text-[#858585] font-JakartaSemiBold mx-4 mt-3">
                {currentItem.description}
              </p>
              
            </div>
            <div className='w-full h-[1px] bg-[#858585]'></div>
            <div className='text-lg text-center text-[#858585] font-JakartaSemiBold mx-10 mt-3'>
              <p>LEADER: HAIL MARY....100X</p>
              <p>LEADER: GLORY BE.....1X </p>
              <p>RESPONSE: HOLY MARY.....100X</p>
              <p>RESPONSE: AS IT WAS.....1X</p>
              <p> <strong>ALL:</strong> Holy, holy, holy Lord, God of power and might. Heaven and earth are full of your glory. Hosannah in the highest. Blessed is He who comes in the name of the Lord.
Hosannah in the highest. <span>Alleluiah! Alleluiah! Alleluiah! For the kingdom, the power and the glory are Yours now and forever. Amen.
Lord Jesus Christ, Son of the Father. Send now Your Spirit over the earth. Let the Holy Spirit live in the hearts of all nations, that they may be preserved from degeneration, disaster and war. May the Lady of all nations Blessed virgin mary be our advocate, Amen.
LEADER: Let us all stand and sing a Hymn to Mary.</span>  
</p>
            </div>
            <div className='flex justify-between mt-4 gap-4 '>
              <div>
                  {currentIndex > 0 && (
                    <PrevButton onClick={handlePrev} />
                  )}
                </div>
                  
                  <p>{currentItem.id}</p>

                  <div>
                    {currentIndex < petition.length - 1 && (
                      <NextButton onClick={handleNext} />
                    )}
                  </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
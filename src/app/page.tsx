"use client"

import Image from 'next/image'
import {useEffect} from 'react';
import rocket from '../../public/rocket.png'
import Aos from "aos";

import "aos/dist/aos.css";
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return  (
      <div id='pai' className='flex flex-col w-full h-full items-center justify-end'>
       <div id='object' className='color'>

        <div data-aos="fade-up-right">
        <Image  className='max-w-md object-cover' src={rocket} alt=''  quality={80} width={500}/>
        </div>
        {/* <div data-aos="fade-up" className='flex relative items-center justify-center w-full top-20 fixed'>
            <nav className='flex gap-2'>
              <Link className='text-slate-50' href='/Xp'>Experiencias </Link>
              <Link className='text-slate-50' href=''>Experiencia </Link>
              <Link className='text-slate-50' href=''>Experiencia </Link>
              <Link className='text-slate-50' href=''>Experiencia </Link>
            </nav>
        </div> */}

        </div>
      </div>
  )
  
}


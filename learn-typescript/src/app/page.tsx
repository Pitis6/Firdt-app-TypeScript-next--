'use client'
// import Image from 'next/image'
import { RandomFox } from './components/RandomFox';
import { useState } from 'react';

const ramdom = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
const [images, setimages] = useState<string[]>([
  `http://randomfox.ca/images/${ramdom()}.jpg`,
  `http://randomfox.ca/images/${ramdom()}.jpg`,
  `http://randomfox.ca/images/${ramdom()}.jpg`,
  `http://randomfox.ca/images/${ramdom()}.jpg`,
]);


  return (
    <main className="text-3xl font-bold underline">
      <h1>Hello Platzi!</h1>
      {
        images.map((image, index)=>(
          <div key={index} className='p-4'>
            <RandomFox image={image}/>
          </div>
        ))
      }
    </main>
  );
}

"use client";
import { type } from "os";
// import Image from 'next/image'
import { RandomFox } from "./components/RandomFox";
import { MouseEventHandler, useState } from "react";

const ramdom = () => Math.floor(Math.random() * 123) + 1;
let number: number = 0;
type ImageItem = {
  id: string;
  url: string;
};
function id() {
  number++;
  return number.toString();
}

export default function Home() {
  const [images, setimages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItem = {
      id: id(),
      url: `http://randomfox.ca/images/${ramdom()}.jpg`,
    };
    setimages([...images, newImageItem]);
  };

  return (
    <main className="text-3xl font-bold underline flex-col justify-center">
      <h1>Hello Platzi!</h1>
      <button
        onClick={addNewFox}
        className="border rounded-xl p-2 border-black bg-red-400	"
      >
        Add new fox
      </button>
      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
}

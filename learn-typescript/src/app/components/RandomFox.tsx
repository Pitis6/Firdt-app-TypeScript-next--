import { type } from "os";
import type { FunctionComponent, FC } from "react";
import { useEffect, useRef, useState } from "react";


// export const RandomFox = () => {
//     return(
//         <img/>
//     )
// }

type Props = {image: string}

export const RandomFox = ({image}: Props): JSX.Element => {

  const node = useRef<HTMLImageElement>(null);
  const [src, setsrc] = useState("")

  useEffect(()=>{

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entrie)=>{
          if (entrie.isIntersecting){
            setsrc(image)
          }
        })
    })
    if(node.current){
      observer.observe(node.current)
    }
    return ()=>{
      observer.disconnect()
    }
  },[src])


  return <img ref={node} width={320} height='auto' src={image} className="rounded" />;
};

// export const RandomFox: FunctionComponent = () => {
//   return <img />;
// };

// export const RandomFox: FC = () => {
//   return <img />;
// };

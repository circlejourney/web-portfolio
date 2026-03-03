import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function Gallery({images, setViewingImage}: {
    images: { src: string, alt: string,  }[],
    setViewingImage: Dispatch<SetStateAction<{src: string, alt: string} | null>>
}) {
    return (<div className="flex flex-col md:flex-row flex-wrap justify-center gap-1 p-3 bg-gray-400 dark:bg-gray-600 rounded-xl">
        {images.map(
            image =>
                <button className="md:basis-1/4 box-border cursor-pointer" key={image.src} onClick={(e)=>setViewingImage(image)}>
                    <Image className="scale-95 hover:scale-100 transition-transform rounded-md" src={image.src} alt={image.alt} width={500} height={350} />
                </button>
        )}
    </div>)
}
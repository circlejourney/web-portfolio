import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function Gallery({images, setViewingImage}: {
    images: { src: string, alt: string,  }[],
    setViewingImage: Dispatch<SetStateAction<{src: string, alt: string} | null>>
}) {
    return (<div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-1 p-3 bg-gray-400 dark:bg-gray-600 rounded-xl">
        {images.map(
            image =>
                <button className="p-2 bg-gray-500 rounded-xl gallery-button md:basis-1/4 box-border cursor-pointer text-center" key={image.src} onClick={()=>{setViewingImage(image)}}>
                    <Image className="gallery-image inline-block scale-95 hover:scale-100 transition-transform rounded-md shadow-sm" src={image.src} alt={image.alt} width={500} height={350} />
                </button>
        )}
    </div>)
}
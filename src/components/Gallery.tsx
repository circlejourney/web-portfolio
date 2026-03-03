import Image from "next/image";

export default function Gallery({images}: {images: { src: string, alt: string }[]}) {
    return (<div className="flex flex-col md:flex-row flex-wrap justify-center gap-1 p-3 bg-gray-400 dark:bg-gray-600 rounded-xl">
        {images.map(
            image => <div className="md:basis-1/4" key={image.src}><Image src={image.src} alt={image.alt} width={500} height={350} /></div>
        )}
    </div>)
}
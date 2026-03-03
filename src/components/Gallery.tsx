import Image from "next/image";

export default function Gallery({images}: {images: { src: string, alt: string }[]}) {
    return (<div className="flex flex-col md:flex-row gap-2">
        {images.map(
            image => <div className="md:w-1/3" key={image.src}><Image src={image.src} alt={image.alt} width={500} height={350} /></div>
        )}
    </div>)
}
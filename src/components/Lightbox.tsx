import Image from "next/image";
import Modal from "./Modal";
import ImageInterface from "../interfaces/ImageInterface";
import { Dispatch, SetStateAction } from "react";

export default function Lightbox({imageData, open, setViewingImage}: {
    imageData: ImageInterface | null,
    open: boolean,
    setViewingImage: Dispatch<SetStateAction<ImageInterface | null>>
}) {
    return (<Modal backgroundClass="bg-stone-900" edgePadding="12" open={open} closeCallback={()=>setViewingImage(null)}>
        {imageData? <Image className="w-full" src={imageData.src} width={800} height={494} alt={imageData.alt} /> : null }
    </Modal>);
}
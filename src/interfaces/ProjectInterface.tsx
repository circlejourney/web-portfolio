import { ReactNode } from "react";
import ImageInterface from "./ImageInterface";

export default interface ProjectInterface {
    thumbnail_src: string,
    thumbnail_alt: string,
    title: string,
    url: string,
    description: string|React.ReactNode,
    short_description: string,
    gallery: ImageInterface[],
    position: string,
    skills: string,
    client?: string,
    stats?: ReactNode[]
}
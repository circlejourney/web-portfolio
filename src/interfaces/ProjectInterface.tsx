import { ReactNode } from "react";
import ImageInterface from "./ImageInterface";

export default interface ProjectInterface {
    thumbnail_src: string,
    thumbnail_alt: string,
    title: string,
    url: string,
    description: string|ReactNode,
    short_description: string,
    gallery: ImageInterface[],
    skills: string,
    position?: string,
    created?: string,
    highlight?: boolean,
    features?: ReactNode;
    client?: string,
    stats?: ReactNode[]
}
export default interface ProjectInterface {
    thumbnail_src: string,
    thumbnail_alt: string,
    title: string,
    url: string,
    description: string|React.ReactNode,
    short_description: string,
    gallery: { src: string, alt: string }[],
    position: string,
    skills: string
}
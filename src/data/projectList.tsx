import ProjectInterface from "../interfaces/ProjectInterface";

const projectList = [
    {
        title: "ChickenPet",
        url: "https://chicken.pet",
        thumbnail_src: "/projects/ChickenPet-1.jpg",
        thumbnail_alt: "ChickenPet dashboard page",
        gallery: [{
                src: "/projects/ChickenPet-1.jpg",
                alt: "ChickenPet dashboard page"
            }, {
                src: "/projects/ChickenPet-2.jpg",
                alt: ""
            }, {
                src: "/projects/ChickenPet-3.jpg",
                alt: ""
        }],
        short_description: "A chicken pet site with forum, trading, breeding, minigame and raffle mechanics.",
        description: (<>
            <p>Consectetur laboris ullamco amet occaecat sint elit duis nisi Lorem deserunt anim quis ullamco ut. Commodo officia mollit consectetur quis enim ea ipsum reprehenderit non mollit.</p>
            <p>Exercitation Lorem duis dolore consequat non do qui dolore excepteur reprehenderit ipsum. Sint sit pariatur nostrud do laborum irure minim sunt Lorem consequat culpa. Aute eiusmod deserunt laborum esse in non nostrud Lorem eiusmod enim labore nostrud. Anim commodo irure exercitation ipsum.</p>
        </>)
    },
    {
        title: "Caring for the Carer",
        url: "https://caringforthecarer.org.au",
        thumbnail_src: "/projects/caringforthecarer.jpg",
        thumbnail_alt: "Caring for the Carer website screenshot",
        gallery: [{
            src: "/projects/caringforthecarer.jpg",
            alt: "Caring for the Carer website screenshot"
        }],
        short_description: "A research-backed knowledge database for carers of patients with brain tumours.",
        description: "Do esse minim cillum Lorem elit dolor."
    },
] as ProjectInterface[];

export default projectList;
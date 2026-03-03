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
        short_description: "A game website centred around breeding, trading, customising, and questing with a coop of chickens.",
        description: (<>
            <p>I&apos;m the founder and full stack developer of ChickenPet, a game website centred around breeding, trading, customising, and questing with a coop of chickens. ChickenPet has forum, trading, breeding, minigame and raffle mechanics.</p>
            <p>
                Outside of developing and maintaining features, I also manage DevOps for ChickenPet and moderate site content.
            </p>
        </>)
    },
    {
        title: "Art Fight",
        url: "https://artfight.net",
        thumbnail_src: "/projects/ArtFight-4.jpg",
        thumbnail_alt: "Screenshot of the Art Fight website",
        gallery: [{
            src: "/projects/ArtFight-1.jpg",
            alt: ""
        }, {
            src: "/projects/ArtFight-2.jpg",
            alt: ""
        }, {
            src: "/projects/ArtFight-3.jpg",
            alt: ""
        }, {
            src: "/projects/ArtFight-4.jpg",
            alt: ""
        }, {
            src: "/projects/ArtFight-5.jpg",
            alt: ""
        }],
        short_description: "An annual game where you earn points by drawing for others, with over 600,000 users.",
        description: (<>
            <p>
                I am a seasonally-contracted web developer for Art Fight, an annual game where you earn points by drawing art of other users&apos; original characters. The game currently has over 600,000 users.
            </p>
            
            <p className="text-xl mt-6 font-normal">
                Features
            </p>

            <ul className="list-disc list-inside">
                <li>
                    <b>Modmail system:</b> I developed and maintain a messaging system for moderators to send anonymous messages to users and vice versa. The modmail feature was integrated with the existing report system. It was designed to comply with site policy around privileged access to data (moderator inboxes), with a clear UI to prevent accidental messages to the wrong recipient.
                </li>
                <li>
                    <b>Modmail templates:</b> I implemented a feature allowing moderators to create and edit message templates, facilitating quick responses to frequently asked questions and common rules infractions.
                </li>
                <li>
                    <b>Custom CSS for character profiles:</b> I created a system allowing users to add custom CSS to their uploaded characters. Users can view a live visual preview showing them how CSS changes affect profile appearace. CSS was sanitised with a custom blacklist before being applied.
                </li>
                <li>
                    <b>Discovery features:</b> I created a new search feature for finding users, characters, and artwork, as well as randomisers that help users discover new friends and characters to draw.
                </li>
            </ul>
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
        description: <>A research-backed knowledge database for carers of patients with brain tumours.</>
    },
] as ProjectInterface[];

export default projectList;
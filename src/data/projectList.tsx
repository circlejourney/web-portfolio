import ProjectInterface from "../interfaces/ProjectInterface";

const projectList = [
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
        position: "Web Developer (2025 - present)",
        skills: "Laravel, PHP, Node.JS and NPM, Bootstrap",
        short_description: "An annual online game where players draw art for others to earn points, with over 600,000 users.",
        description: (<>
            <p>
                I am a seasonally-contracted web developer for Art Fight, an annual game where you earn points by drawing art of other users&apos; original characters. The game currently has over 600,000 users.
            </p>
            
            <p className="text-xl mt-8 font-normal">
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
        position: "Full-Stack Developer (2024 - present)",
        skills: "Laravel, PHP, SASS, Node.JS and NPM with Vite package manager, Bootstrap",
        short_description: "A game website centred around breeding, trading, customising, and questing with a coop of chickens.",
        description: (<>
            <p>I&apos;m the founder and full stack developer of ChickenPet, a game website centred around breeding, trading, customising, and going on adventures with chickens.</p>
            <p>
                Outside of developing and maintaining features, I also manage DevOps for ChickenPet and moderate site content.
            </p>
            <p className="text-xl mt-8 font-normal">
                Features
            </p>
            <ul className="list-disc list-inside">
                <li>
                    <b>Genetics system:</b> ChickenPet&apos;s central mechanic is its genetics system. Chickens have colour and trait genes that are inherited by offspring in complex relations. Some genes are recessive and can only be hatched by parents with specific genes.
                </li>
                <li>
                    <b>Social features:</b> ChickenPet has a public marketplace, forums, chicken-trading, and raffle mechanics that allow players to trade chickens and items.
                </li>
                <li>
                    <b>Moderation and developer ticket tools:</b> ChickenPet has robust tools for moderation and curating the play experience, such as a ticket system for reporting bugs, a dev tracker, user blocking features that wrap site functions, and an upcoming authorisation list feature for fine-tuning access to shop listings.
                </li>
                <li>
                    <b>Minigames:</b> ChickenPet has a minigames.  Minigames incorporate members of the user&apos;s coop and affect other site functions like shop prices. Among these games, players can bring chickens on adventures, organise heists to steal currency, and find missings chicken on a tile board.
                </li>
            </ul>
        </>)
    },
    {
        title: "Caring for the Carer",
        url: "https://caringforthecarer.org.au",
        thumbnail_src: "/projects/caringforthecarer.jpg",
        position: "Web Designer (2025)",
        skills: "WordPress, PHP, jQuery",
        thumbnail_alt: "Caring for the Carer website screenshot",
        gallery: [{
            src: "/projects/caringforthecarer.jpg",
            alt: "Caring for the Carer website screenshot"
        }],
        short_description: "A research-backed knowledge database for allies and supporters of patients with brain tumours.",
        description: <>I was a contract web designer and developer for the Caring for the Carer project. Developed under a joined project by four Australian universities, this is a medical-research-backed knowledge database offering both pragmatic advice and mental wellness tips for allies and supporters of patients with brain tumours.</>
    },
] as ProjectInterface[];

export default projectList;
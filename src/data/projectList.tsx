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
        position: "Full-Stack Developer (2024 - present)",
        skills: "Laravel, PHP, SASS, Node.JS + NPM, HTML, Git",
        short_description: "A game website centred around breeding, trading, and going on adventures with pet chickens.",
        description: (<>
            <p>I&apos;m the founder and full stack developer of ChickenPet, a game website centred around breeding, trading, customising, and going on adventures with chickens.</p>
            <p>
                Outside of developing and maintaining features, I also manage DevOps for ChickenPet and moderate site content.
            </p>
            <h3 className="text-xl mt-6 font-normal">
                Features I developed
            </h3>
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
        title: "Art Fight",
        url: "https://artfight.net",
        thumbnail_src: "/projects/ArtFight-1.jpg",
        thumbnail_alt: "Screenshot of the Art Fight website",
        gallery: [ {
            src: "/projects/ArtFight-3.jpg",
            alt: ""
        }, {
            src: "/projects/ArtFight-1.jpg",
            alt: ""
        }, {
            src: "/projects/ArtFight-2.jpg",
            alt: ""
        }, {
            src: "/projects/ArtFight-4.jpg",
            alt: ""
        }, {
            src: "/projects/ArtFight-5.jpg",
            alt: ""
        }],
        position: "Web Developer (2025 - present)",
        client: "Art Fight LLC",
        skills: "Laravel, PHP, Node.JS + NPM, Bootstrap, HTML, CSS, Git",
        short_description: "An annual online game where players draw art for each other to earn points.",
        description: (<>
            <p>
                I am a seasonally-contracted web developer for Art Fight, an annual game where you earn points by drawing art of other users&apos; original characters. The game currently has over 600,000 users and is rapidly growing.
            </p>
            
            <h3 className="text-xl mt-6 font-normal">
                Features I developed
            </h3>

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
        position: "Web Designer (2025)",
        skills: "WordPress, PHP, jQuery, HTML, CSS",
        client: "Queensland University of Technology",
        thumbnail_alt: "Caring for the Carer website screenshot",
        gallery: [{
            src: "/projects/caringforthecarer.jpg",
            alt: "Caring for the Carer website screenshot"
        }],
        short_description: "A research-backed knowledge database for allies and supporters of patients with brain tumours.",
        description: (<>
            <p>
                I was a contract web designer and developer for the <i>Caring for the Carer project</i>. Developed under a joint research project by four Australian universities, this is a research-backed knowledge database offering both pragmatic advice and mental wellness tips for allies and supporters of patients with brain tumours.
            </p>
            <p>
                The website was built in WordPress, incorporating feedback from user-testing studies. Clarity and approachability were prioritised to ensure that users experienced as little friction as possible while searching for information about an oftentimes difficult experience.
            </p>
            
            <h3 className="text-xl mt-6 font-normal">
                Features I developed
            </h3>
            
            <ul className="list-disc list-inside">
                <li>
                    <b>Navigation utilities:</b> I wrote custom scripts in the WordPress PHP templating engine to insert links at the bottom of each article, allowing users to navigate back and forth between articles for easy browsing.
                </li>
                <li>
                    <b>Context-sensitive navigation menu:</b> I re-programmed the sidebar navigation menu to let users toggle sections open and closed, making the large number of articles more approachable and facilitating access to relevant information.
                </li>
                <li>
                    <b>UI and content uplift:</b> I revised the website&apos;s user interface and content to reduce the density of medical information and communicate it effectively with colours, text boxes, and graphics, facilitating an approachable reading experience for lay users.
                </li>
            </ul>
        </>)
    },
    {
        title: "TH Live Code Editor",
        url: "https://th.circlejourney.net",
        thumbnail_src: "/projects/THEditor-1.jpg",
        position: "Web Developer (2020 - present)",
        skills: "PHP, jQuery, HTML, CSS",
        thumbnail_alt: "Screenshot of the Toyhouse Live Code Edtor",
        gallery: [{
            src: "/projects/THEditor-1.jpg",
            alt: "Caring for the Carer website screenshot"
        }],
        short_description: "A HTML + CSS editor with live visual preview that helps beginner coders customise Toyhouse pages.",
        description: (<>
            <p>
                I created the Toyhouse Live Code Editor, a HTML and CSS editor with a live visual preview that helps beginner coders create pages for the Toyhouse website.
            </p>
            <p>
                Toyhouse is a creativity-focused website that lets users customise their pages using HTML and CSS. However, many users are unfamiliar with these coding languages. This tool is designed to help those users create visually appealing pages and learn how to code by displaying a live-refreshing preview of their HTML and CSS.
            </p>
            
            <h3 className="text-xl mt-6 font-normal">
                Features I developed
            </h3>
            
            <ul className="list-disc list-inside">
                <li>
                    <b>Live code preview:</b> The preview frame refreshes with the user&apos;s latest code after the user idles for a fixed length of time. Code is parsed before insertion to ensure it is functional.
                </li>
                <li>
                    <b>Preview in Toyhouse&apos;s colour themes and page layouts:</b> Toyhouse allows code to be displayed in a wide range of colour theme and layout contexts. The code editor supports previewing code in various themes and layouts to get an accurate view of the code in situ. It also supports mobile screen code previewing.
                </li>
                <li>
                    <b>Customisable, accessible code editor UI:</b> The code editor provides several layouts, docking the editor in different parts of the screen, popping the preview out into a separate window. It also offers light, dark, low-contrast and large-text modes for accessibility.
                </li>
            </ul>
        </>)
    },
] as ProjectInterface[];

export default projectList;
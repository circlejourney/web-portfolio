import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectInterface from "../interfaces/ProjectInterface";
import { faEye, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

const projectList = [
    {
        title: "Art Fight",
        url: "https://artfight.net",
        highlight: true,
        thumbnail_src: "/projects/ArtFight-thumb.jpg",
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
        stats: [ <>600,000 <FontAwesomeIcon icon={faUser}/></> ],
        skills: "Laravel, PHP, Node.JS + NPM, HTML, CSS, Git",
        short_description: "An annual online game where players draw art for each other to earn points.",
        description: (<>
            <p>
                I am a seasonally-contracted web developer for Art Fight, an annual game where you earn points by drawing art of other users&apos; original characters. The game currently has over 600,000 users and is rapidly growing.
            </p>
        </>),
        features: <ul className="list-disc list-inside">
            <li>
                <b>Modmail system:</b> I developed and maintain a messaging system for moderators to send anonymous messages to users and vice versa. The modmail feature was integrated with the existing report system and designed to comply with site policy around privileged access to data (moderator inboxes). Clear UI design prevents accidental messages to the wrong recipient.
            </li>
            <li>
                <b>Modmail templates:</b> I implemented a feature allowing moderators to create and edit message templates, facilitating quick responses to frequently asked questions and common rules infractions.
            </li>
            <li>
                <b>Custom CSS for character profiles:</b> I created a system allowing users to add custom CSS to their uploaded characters. Users can view a live visual preview showing them how CSS changes affect profile appearance. CSS was sanitised with a custom blacklist before being applied.
            </li>
            <li>
                <b>Discovery features:</b> I created a new search feature for finding users, characters, and artwork, as well as randomisers that help users discover new friends and creative opportunities.
            </li>
        </ul>
    },
    {
        title: "Caring for the Carer",
        url: "https://caringforthecarer.org.au",
        highlight: true,
        thumbnail_src: "/projects/caringforthecarer-thumb.jpg",
        thumbnail_alt: "Caring for the Carer website screenshot",
        position: "Web Designer (2025)",
        skills: "WordPress, PHP, JavaScript + jQuery, HTML, CSS",
        client: "Queensland University of Technology",
        gallery: [{
            src: "/projects/caringforthecarer.jpg",
            alt: "Caring for the Carer website screenshot"
        }],
        short_description: "A research-backed knowledge database for allies and supporters of patients with brain tumours.",
        description: (<>
            <p>
                I was a contract web designer/developer for <i>Caring for the Carer</i>, a joint research project by four Australian universities. This knowledge database offers medical information and pragmatic advice for carers of patients with brain tumours. Built in WordPress, it incorporates feedback from user-testing studies, offering an approachable, frictionless experience while browsing medical and administrative resources.
            </p>
        </>),
        features: <ul className="list-disc list-inside">
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
    },
    {
        title: "ChickenPet",
        url: "https://chicken.pet",
        highlight: true,
        thumbnail_src: "/projects/ChickenPet-thumb.jpg",
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
        stats: [ <>1,500 <FontAwesomeIcon icon={faUser}/></> ],
        position: "Full-Stack Developer (2024 - present)",
        skills: "Laravel, PHP, SASS, Node.js + NPM, HTML, Git",
        short_description: "A game website centred around breeding, trading, and going on adventures with pet chickens.",
        description: (<>
            <p>I&apos;m the founder and full stack developer of ChickenPet, a game website centred around breeding, trading, customising, and going on adventures with chickens.</p>
            <p>
                Outside of developing and maintaining features, I also manage DevOps for ChickenPet and moderate site content.
            </p>
        </>),
        features: <ul className="list-disc list-inside">
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
    },
    {
        title: "OzCHI Conference",
        url: "https://ozchi.org",
        skills: "PHP, HTML, CSS, JavaScript + jQuery",
        thumbnail_src: "/projects/OzCHI-thumb.jpg",
        thumbnail_alt: "Screenshot of OzCHI 2025 website",
        position: "Web and Social Media Chair (2024 - present)",
        highlight: true,
        short_description: "The official website of the Australian Conference on Human-Computer Interaction.",
        description: <>
            <p>
                As a Web and Social Media chair for OzCHI since 2024, I have been in charge of designing, developing, and maintaining the website as its hub of information for presenters and attendees. I liaise with other conference chairs to ensure all information is up-to-date and accurate, and I design layouts that present lots of information concisely.
            </p>
        </>,
        features: <ul className="list-disc list-inside">
            <li>
                <b>Templating engine:</b> Because this website needs to be updated rapidly with newly-released information, I programmed a PHP templater to rapidly scaffold consistent webpage layouts with shared data, dependencies and visual elements, allowing for quick creation and revision of webpages.
            </li>
            <li>
                <b>Plain PHP for interoperability:</b> OzCHI&apos;s organisation team changes yearly, so webpages are coded in vanilla PHP, HTML and JavaScript to ensure they are easily readable and iterated on by future developers who may not be in contact with past developers.
            </li>
            <li>
                <b>Detailed conference program layouts:</b> I designed layouts that present OzCHI&apos;s five-day schedules concisely and comprehensibly. Annually, OzCHI features dozens of talks, workshops, and all-day poster presentations and the program is crucial for helping attendees navigate the venue and help.
            </li>
        </ul>,
        gallery: [{
            src: "/projects/OzCHI-2.jpg",
            alt: "Screenshot of OzCHI 2025 website"
        },{
            src: "/projects/OzCHI-1.jpg",
            alt: "Screenshot of OzCHI 2025 website in mobile view"
        },{
            src: "/projects/OzCHI-5.jpg",
            alt: "Screenshot of OzCHI 2025 website"
        },{
            src: "/projects/OzCHI-3.jpg",
            alt: "Screenshot of OzCHI 2024 website"
        },{
            src: "/projects/OzCHI-4.jpg",
            alt: "Screenshot of OzCHI 2024 website"
        }]
    },
    {
        title: "Interactive Commission Estimates",
        url: "https://circlejourney.net/commissions",
        created: "2023",
        highlight: true,
        thumbnail_src: "/projects/comms-thumb.jpg",
        thumbnail_alt: "Screenshot of interactive commission estimates app",
        skills: "React.js, HTML, CSS, PHP",
        gallery: [{
            src: "/projects/comms-1.jpg",
            alt: "Screenshot of interactive commission estimates app"
        },{
            src: "/projects/comms-2.jpg",
            alt: "Screenshot of interactive commission estimates app"
        },{
            src: "/projects/comms-3.jpg",
            alt: "Screenshot of interactive commission estimates app"
        }],
        short_description: "An interactive application for previewing art samples and instantly creating art commission estimates.",
        description: (<>
            <p>
                As a freelance artist, I created this web application for clients to view instant estimates for my art services before contacting me to order.
                This tool showcases my artwork to entice viewers while also providing inormation about pricing in various currencies.
            </p>
        </>),
        features: <ul className="list-disc list-inside">
                <li>
                    <b>Currency conversion with Exchange Rate API:</b> Since my clients are based in different countries, the app is integrated with the Exchange Rate API to support previewing prices in different home currencies. API results are cached daily via my website&apos;s PHP backend to reduce the number of API requests.
                </li>
                <li>
                    <b>Image preview lightbox:</b> To allow users to art samples at a larger size as well as browse through collections of samples for the same styles, I implemented a lightbox that is easily scrollable.
                </li>
                <li>
                    <b>&ldquo;Order now&rdquo; link:</b> When an art style is selected, the app generates a convenient hyperlink that autofills the PHP-based commission inquiry form on my website.
                </li>
            </ul>
    },
    {
        title: "Live Code Editor",
        url: "https://th.circlejourney.net",
        created: "2020",
        highlight: true,
        thumbnail_src: "/projects/THeditor-thumb.jpg",
        thumbnail_alt: "Screenshot of the Toyhouse Live Code Edtor",
        skills: "PHP, jQuery, HTML, CSS",
        stats: [ <>2,500,000 <FontAwesomeIcon icon={faEye}/></>, <>23 <FontAwesomeIcon icon={faStar}/></> ],
        gallery: [{
            src: "/projects/THeditor-1.jpg",
            alt: "Caring for the Carer website screenshot"
        }],
        short_description: "A HTML/CSS editor with live visual preview, helping coders customise Toyhouse webpages.",
        description: (<>
            <p>
                I develop and maintain the Toyhouse Live Code Editor, a HTML and CSS editor with a visual preview window that helps coders design webpages for Toyhouse.
                Toyhouse is a creativity-focused website where users (often unfamiliar with code) may customise webpages with HTML and CSS. With a live-refreshing preview code, this tool helps users create visually rich pages.
            </p>
        </>),
        features: <ul className="list-disc list-inside">
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
    },
    {
        title: "Circlejourney: Homepage",
        url: "https://circlejourney.net",
        skills: "Laravel, PHP, HTML, CSS, JavaScript + jQuery",
        thumbnail_src: "/projects/homepage-thumb.jpg",
        thumbnail_alt: "Screenshot of my homepage",
        created: "2016  ",
        short_description: "My homepage, serving as a hub for all my work in web development, creative coding, art, music, and more.",
        description: <>
            <p>
                My homepage showcases my works across many mediums: web development, creative coding, visual art, animation, music production, and writing. It has a <a href="https://new.circlejourney.net/search">Search feature</a> with an index built using a bespoke crawler.
            </p>
        </>
    },
    {
        title: "Transplacial Playground",
        url: "https://place.circlejourney.net",
        skills: "Laravel, PHP, HTML, CSS, JavaScript + jQuery, Cytoscape.js",
        thumbnail_src: "/projects/Transplaces-thumb.jpg",
        thumbnail_alt: "Screenshot of Mapping Transplaces",
        short_description: "The co-creative interactive works emerging from my PhD research.",
        created: "2023",
        description: <>
            <p>
                In my PhD thesis, I explored designing digital spaces for affective connection at a distance, I reimagining technologies like websites and maps to create a sense of being in the same place and playing together. These interactive apps explore the concept of &ldquo;transplace&rdquo; which my thesis posits: places formed when expressive, persistent, and synchronous technologies scaffold affective connections.
            </p>
        </>
    },
    {
        title: "MiniReader",
        url: "http://github.com/circlejourney/minireader",
        skills: "PHP, HTML, CSS, JavaScript + jQuery",
        thumbnail_src: "/projects/MiniReader-thumb.jpg",
        thumbnail_alt: "Screenshot of MiniReader",
        short_description: "A minimalistic PHP templater for self-publishing stories.",
        created: "2023",
        description: <>
            <p>
                This templating framework was made for people with low-to-moderate familiarity with coding to self-publish novels and short fiction. Configured with JSON and HTML files for written content, it runs out of the box on a PHP server, providing a single-page view of all chapters and a dark/light mode colour theme toggles.
            </p>
        </>
    }
] as ProjectInterface[];

export default projectList;
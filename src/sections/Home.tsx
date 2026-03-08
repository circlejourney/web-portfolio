import { faArrowUpRightFromSquare, faHouse } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {

    return (<div id="home" className="font-normal md:flex-row md:my-15">
            
        <Header icon={faHouse} header={"Home"}/>
        
        <div className="text-[16px]/8 font-light">
            
            <p className="mb-6">
            I&apos;m Amari, a full stack web developer who loves making visually appealing, easy-to-use websites for creativity and learning.
            </p>
            
            <p className="mb-6">
                I believe websites should always be a delight to use. I love adding personality and flair to everything I create, drawing on my experience as a visual artist and interaction design researcher to create seamless, pleasurable web experiences without compromising on performance and security.
            </p>
            
            <p className="mb-6">
            Currently, I&apos;m a web developer at <Link href="https://artfight.net" target="_blank">Art Fight <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>, where I design and develop major new features for more tha 600,000 users. I am also the founder and solo web developer of <Link href="https://chicken.pet" target="_blank">ChickenPet <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>, a game website with trading, forums, and raffle mechanics.
            </p>
            
        </div>

    </div>);
}
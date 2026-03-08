import { faArrowUpRightFromSquare, faHouse } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {

    return (<div id="home" className="font-normal md:flex-row md:my-15">
            
        <Header icon={faHouse} header={"Home"}/>
        
        <div className="text-[16px]/8 font-light">
            
            <p className="mb-6">
            I&apos;m Amari, a full stack web developer who loves making visually-appealing, creativity-oriented and informative websites.
            </p>
            
            <p className="mb-6">
            I believe that websites should always be a delight to use. I enjoy adding personality and flair to everything I create, drawing on my past experience as a visual artist to create layouts that are both readable and attention-grabbing.
            </p>
            
            <p className="mb-6">
            Currently, I&apos;m a web developer at <Link href="https://artfight.net" target="_blank">Art Fight <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>, where I develop and maintain new features for more than 600,000 users. I am also the founder and solo web developer of <Link href="https://chicken.pet" target="_blank">ChickenPet <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>, a game website with 1,500 players and growing with trading, forums, and raffle mechanics.
            </p>
            
        </div>

    </div>);
}
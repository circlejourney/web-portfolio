import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {

    return (<div id="home" className="font-normal md:flex-row md:my-15">
        
        <div className="text-[16px]/8 font-light">
            
            <p className="text-lg mb-6">
            🐳
            <b>Hello, I&apos;m Amari!</b> I&apos;m a full stack web developer who loves making visually appealing, easy-to-use websites for social communities, creativity and research communication.
            </p>
            
            <p className="mb-6">
                I believe great websites should be a delight to use. With my foundation in visual art and interaction design research, I craft web experiences that are seamless and full of personality without compromising on performance and security.
            </p>
            
            <p className="mb-6">
            Currently, I&apos;m a web developer at <Link href="https://artfight.net" target="_blank">Art Fight <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>, where I design and develop major new features for more tha 600,000 users. I am also the founder and solo web developer of <Link href="https://chicken.pet" target="_blank">ChickenPet <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>, a game website with trading, forums, and raffle mechanics.
            </p>
            
        </div>

    </div>);
}
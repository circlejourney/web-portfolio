import Link from "next/link";
import Header from "../components/Header";
import { faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (  
        <div id="contact" className="font-normal md:flex-row my-15">
            <Header icon={faEnvelope} header={"Contact"}/>
            
            <div className="text-xl">
                <p className="mb-2">
                    <FontAwesomeIcon icon={faEnvelope}/> circlejourneyart@gmail.com
                </p>
                <p className="mb-2">
                    <FontAwesomeIcon icon={faLinkedin}/> <Link href="https://www.linkedin.com/in/amari-l-29494b87/" target="linkedin">linkedin.com/in/amari-l-29494b87 <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>
                </p>
            </div>
        </div>);
}
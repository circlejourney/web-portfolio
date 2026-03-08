import Link from "next/link";
import Header from "../components/Header";
import InlineHeaderContent from "../components/InlineHeaderContent";
import { faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (  
        <div id="contact" className="font-normal md:flex-row my-15">
            <Header icon={faEnvelope} header={"Contact"}/>
        
            <p className="mb-2">
                <InlineHeaderContent header="Email">circlejourneyart@gmail.com</InlineHeaderContent>
            </p>
            <p className="mb-2">
                <InlineHeaderContent header="LinkedIn">
                <Link href="https://www.linkedin.com/in/amari-l-29494b87/" target="linkedin">linkedin.com/in/amari-l-29494b87 <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></Link>
                </InlineHeaderContent>
            </p>
        </div>);
}
import BorderCard from "../components/BorderCard";
import Header from "../components/Header";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function About() {
    return (
        <div id="about" className="font-normal md:flex-row my-15">
            <Header icon={faUser} header={"About Me"}/>
            <BorderCard className="text-[15px] leading-8 mx-4 my-8" header="Skills">
                <ul className="list-disc list-inside font-light">
                    <li>
                    <span className="font-semibold">5+ years&apos; experience</span> in PHP, MySQL, JavaScript, HTML, and CSS
                    </li>
                    <li>
                    <span className="font-semibold">2 years&apos; experience</span> in Laravel, Typescript, React.js, and Next.js
                    </li>
                    <li>
                    <span className="font-semibold">Research-backed, user-centred design:</span> I&apos;ve conducted PhD research into improving interaction design practices for affective connection.
                    </li>
                    <li>
                    <span className="font-semibold">Motivated independent learner:</span> As a self-taught web developer, I&apos;m confident upskilling and learning frameworks independently with minimal guidance.
                    </li>
                </ul>
            </BorderCard>

            <BorderCard className="text-[15px] leading-8 mx-4 my-8" header="Qualifications">
                <ul className="list-disc list-inside font-light">
                    <li><span className="font-semibold">Doctor of Philosophy</span>: Human-Computer Interaction and Interaction Design</li>
                    <li><span className="font-semibold">Master of Fine Arts</span>: Interactive Media</li>
                    <li><span className="font-semibold">Bachelor of Fine Arts (1st Class Honours)</span>: Digital Animation</li>
                </ul>
            </BorderCard>
        
        </div>
    )
}
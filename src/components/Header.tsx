import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin-ext"],
  weight: "400"
});

export default function Header({header, icon}: {header: string, icon: IconProp}) {
    return( <h2 className={`text-header text-4xl mb-6 flex items-center gap-3 ${bungee.className}`}>
        <FontAwesomeIcon icon={icon}/> {header}
        <hr className="flex-1 border-t-1 mt-1"/>
    </h2>);
}
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Header({header, icon}: {header: string, icon: IconProp}) {
    return( <h2 className="text-4xl mb-6 flex items-center gap-3 text-gray-900 dark:text-gray-100">
        <FontAwesomeIcon icon={icon}/> {header}
        <hr className="flex-1 border-t-1 mt-1"/>
    </h2>);
}
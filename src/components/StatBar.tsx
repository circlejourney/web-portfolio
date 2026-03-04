import { ReactNode } from "react";
import { Badge } from "./Badge";

export default function StatBar({stats} : {stats: ReactNode[]}) {
    return stats.map( (stat, i) => <Badge className="mr-2" key={i}>{stat}</Badge> );
                    
}
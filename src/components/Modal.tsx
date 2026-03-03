import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Modal({open, children, closeCallback, edgePadding="8", backgroundClass="bg-accent"}: {
    open: boolean,
    children: React.ReactNode,
    closeCallback: CallableFunction,
    edgePadding?: string,
    backgroundClass?: string
}) {
    
    return (<>
        <div className={`${open ? "bg-black/50" : "bg-black/0"} h-screen w-screen fixed transition-colors pointer-events-none`}></div>
        <div className={`fixed left-0 px-${edgePadding} w-screen transition-all duration-400 ${open ? `h-screen py-${edgePadding} top-0` : "h-0 p-0 top-1/2"}`}>
            <div className={`${backgroundClass} rounded-2xl overflow-y-auto w-full px-10 ${open ? "h-full py-10" : "h-0"} relative transition-all duration-400`}>        
                {open ?
                    (<button onClick={()=>closeCallback(null)} className="absolute top-5 right-5 cursor-pointer">
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>)
                    : null}
                {children}
            </div>
        </div>
    </>);
}
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";

export default function Modal({open, children, closeCallback, edgePadding="8", backgroundClass="bg-accent"}: {
    open: boolean,
    children: React.ReactNode,
    closeCallback: MouseEventHandler,
    edgePadding?: "8" | "12",
    backgroundClass?: string
}) {
    const edgePaddings = {
        8: {
            x: "px-8",
            y: "py-8",
        },
        12: {
            x: "px-12",
            y: "py-12",
        },
    }

    return (<>
        <div className={`${open ? "bg-black/50" : "bg-black/0"} h-screen w-screen fixed transition-colors pointer-events-none`}></div>
        <div className={`fixed left-0 ${edgePaddings[edgePadding].x} w-screen transition-all duration-400 ${open ? `h-screen ${edgePaddings[edgePadding].y} top-0` : "h-0 p-0 top-1/2"}`}>
            <div className={`${backgroundClass} rounded-2xl overflow-y-auto m-auto shadow-xl ${open ? "h-full w-full p-4 md:p-10" : "h-0 w-0"} relative transition-all duration-400`}>        

                <button onClick={closeCallback} className={`text-white fixed top-3 right-3 cursor-pointer transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <FontAwesomeIcon icon={faTimes}/>
                </button>

                {children}
            </div>
        </div>
    </>);
}
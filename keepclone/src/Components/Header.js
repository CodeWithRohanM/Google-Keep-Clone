import React from "react";
import Note from "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/Google Keep Clone/keepclone/src/Icons/note.png";
import "./Header.css";

export default function Header()
{
    return <>

    <div id="mainContainer" className="w-full py-4 h-auto items-center bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">

        <div id="innerContainer" className="mx-8 h-auto flex flex-row gap-4 items-center">
            <img src={Note} className = "w-14 h-14"/>
            <h1 id = "setFont" className="text-4xl">QuickNotes</h1>
        </div>

    </div>
    </>
}
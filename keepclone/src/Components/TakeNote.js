import React, { useState } from "react";
import "./Header.css";

export default function TakeNote(props) {

    const [takingNote, setTakingNote] = useState(false);
    const [roundedValue, setRoundedValue] = useState("rounded-t-md");

    const [data, setData] = useState({
        title: "",
        note: "",
    })

    const takingInput = () => {
        setTakingNote(true);
        setRoundedValue("");
    }

    const takeUserInput = (event) => {

        const Inputvalue = event.target.value;
        const Inputname = event.target.name;

        setData((prevData) => {
            if (Inputname === "title")
                return {
                    title: Inputvalue,
                    note: prevData.note,
                }
            else
                return {
                    title: prevData.title,
                    note: Inputvalue,
                }

        })
    }


    const listItems = () => {
        props.displayToSavedNotes(data);
        setData({
            title: "",
            note: ""
        })

    }



    return <>

        <div id="setNotesFont" className="font-bold flex justify-center h-80 pt-12">

            <div id="actualNotePad" className="w-1/2 h-fit rounded-lg flex flex-col border border-gray-400">
                
                {
                    takingNote && <div className="w-full">
                    <input type="text" placeholder="Title" className="p-2 w-full" value={data.title} onChange={takeUserInput} name="title"></input>
                    </div>
                }

                <div className={`border border-gray-400 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 rounded-b-md ${roundedValue}`}>
                    <div className={`px-4 py-2 ${roundedValue} dark:bg-gray-800`}>
                        <textarea id="comment" rows="2" className="w-full text-sm text-gray-900 bg-gray-50 border-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." onClick={takingInput} value={data.note} onChange={takeUserInput} name="note"></textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button type="button" className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={listItems}>Add Note</button>

                        <div className="flex pl-0 space-x-1 sm:pl-2">
                            <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Attach file</span>
                            </button>
                            <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Set location</span>
                            </button>
                            <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Upload image</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </>
}
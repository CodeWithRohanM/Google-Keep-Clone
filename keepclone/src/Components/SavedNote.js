import React, { useState } from "react";
import Icon from "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/Google Keep Clone/keepclone/src/Icons/note.png";
import "./Header.css";

export default function SavedNote(props) {


    // const [savedData, setSavedData] = useState({
    //     savedTitle: props.getTitle,
    //     savedNote: props.getNote
    // });

    // const addData = (event) =>{
    //     const getExtraValue = event.target.value;
    //     const getExtraName = event.target.name;

    //     setSavedData((prevData)=>{

    //         if(getExtraName == "savedTitleName"){
    //             return {
    //                 savedTitle : getExtraValue,
    //                 savedNote: prevData.savedNote
    //             }
    //         }
    //         else{
    //             return {
    //                 savedTitle: prevData.savedTitle,
    //                 savedNote: getExtraValue
    //             }
    //         }
    //     })
    // }




    return <>


        <div id="setNotesFont" className="rounded-xl w-96 h-60 flex flex-row bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">

            <div className="flex flex-row h-full">
                <img src={props.getImage} className="w-2/5 object-cover h-full rounded-l-xl"></img>

                <div className="h-fit flex flex-col w-3/5 ">

                    <dv className="h-full p-4 flex flex-col gap-y-6">
                        <div className="flex items-center border-b border-teal-500 py-2">
                            <input className="font-bold appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={props.getTitle} name = "savedTitleName"/>
                        </div>
                        {/* <input type="text" className="text-xl font-bold bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100" value={props.getTitle}></input> */}
                        <textarea value={props.getNote} rows="4" className="border-none bg-transparent appearance-none w-full" name="savedNoteName"></textarea>

                    </dv>

                    <button className="inline-flex text-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md w-1/2 mx-auto" onClick={()=>{
                        props.deleteSelectedItem(props.id);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>

                        Delete
                    </button>


                </div>

            </div>



        </div>

    </>
}
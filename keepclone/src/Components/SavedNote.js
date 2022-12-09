import React from "react";
import Icon from "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/Google Keep Clone/keepclone/src/Icons/note.png";
import "./Header.css";

export default function SavedNote(props) {


    return <>

        {/* <div className="flex justify-center h-fit w-full border-2 rounded-lg">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className="w-full object-cover md:w-48 h-fit rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.getImage} alt="" />
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{props.getTitle}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {props.getNote} 
                    </p>
                    <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
            
        </div> */}



        <div id="setNotesFont" className="rounded-xl w-96 h-60 flex flex-row bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">

            <div className="flex flex-row h-full">
                <img src={props.getImage} className="w-2/5 object-cover h-full rounded-l-xl"></img>

                <div className="h-fit flex flex-col w-3/5 ">

                    <dv className="h-full p-4 flex flex-col gap-y-6">
                        <div className="flex items-center border-b border-teal-500 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={props.getTitle} />
                        </div>
                        {/* <input type="text" className="text-xl font-bold bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100" value={props.getTitle}></input> */}
                        <textarea value={props.getNote} rows="4" className="border-none bg-transparent appearance-none w-full "></textarea>

                    </dv>

                    <button className="inline-flex text-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md w-1/2 mx-auto" onClick={()=>{
                        props.deleteSelectedItem(props.id);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>

                        Delete
                    </button>


                </div>

            </div>



        </div>




        {/* <div id="savedNotes" className="w-80 h-auto rounded-md flex flex-col border border-black">
            <input type="text" className="rounded-md p-2 border border-black" value={props.getTitle} onChange={store}></input>

            <form>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" className="w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required value={props.getNote}></textarea>
                    </div>

                </div>

                <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => {
                    props.deleteSelectedItem(props.id);
                }}>✂️</button>

            </form>

        </div> */}

    </>
}
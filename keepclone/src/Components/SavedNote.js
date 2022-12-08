import React from "react";
import Icon from "/Users/rohanmote/Desktop/Thapa Projects/Mini Projects/Google Keep Clone/keepclone/src/Icons/note.png";

export default function SavedNote(props) {


    return <>

        <div className="flex justify-center h-fit w-full border-2 rounded-lg">
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
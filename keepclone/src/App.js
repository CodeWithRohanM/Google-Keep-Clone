import React, { useState } from "react";
import Header from "./Components/Header";
import TakeNote from "./Components/TakeNote";
import SavedNote from "./Components/SavedNote";

export default function App() {

  const [saveData, setSaveData] = useState([]);


  const displayToSavedNotes = (data) => {

    setSaveData((prevData) => {
      return [...prevData, data];
    });

  }

  const deleteSelectedItem = (id) => {
    setSaveData((prevData) => {
      return prevData.filter((event, index) => {
        return id !== index;
      })
    })
  }
  return <>

<div className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 h-screen">

    <Header />

      <TakeNote displayToSavedNotes={displayToSavedNotes} />

      <div className="grid grid-cols-4 gap-x-6 p-8 gap-y-12">

        {
          saveData.map((event, index) => {

            return <SavedNote key={index} id={index} getTitle={event.title} getNote={event.note} deleteSelectedItem={deleteSelectedItem} getImage="https://picsum.photos/200/300" />

          })
        }
      </div>
    </div>

  </>
}
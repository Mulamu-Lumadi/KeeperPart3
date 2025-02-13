import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [noteItems, setNoteItems] = useState([]);
  const [noteObj, setNoteObj] = useState({
    title: "",
    content: "",
  });

  function handleTyping(e) {
    const { name, value } = e.target;
    setNoteObj((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }
  function newNote() {
    setNoteItems((preVal) => {
      return [...preVal, noteObj];
    });
    setNoteObj({ title: "", content: "" });
  }

  function del(id) {
    setNoteItems((preVal) => {
      return preVal.filter((val, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        title={noteObj.title}
        content={noteObj.content}
        add={newNote}
        handle={handleTyping}
      />
      {noteItems.map((noteItem, index) => {
        return (
          <Note
            key={uuidv4()}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={del}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

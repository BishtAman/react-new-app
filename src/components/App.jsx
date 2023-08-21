import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNotes] = React.useState([]);
  function onAdd(noteContent, event) {
    setNotes((preVal) => {
      return [...preVal, noteContent];
    });
  }
  function onDelete(index) {
    console.log("hellsdfjs");
    setNotes((preVal) => {
      return preVal.filter((item, id) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {noteArray.map((noteItem, index) => (
        <Note
          key={index}
          index={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={onDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

import React from "react";

function CreateArea(props) {
  const [noteContent, setDetails] = React.useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setDetails((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteContent.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={noteContent.content}
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onAdd(noteContent);
            setDetails({
                title: "",
                content:""
            })
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
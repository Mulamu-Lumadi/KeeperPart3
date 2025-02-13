import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.handle}
          name="title"
          placeholder="Title"
          value={props.title}
        />
        <textarea
          onChange={props.handle}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
        />
        <button type="button" onClick={props.add}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

import React, { useState, useEffect } from "react";
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';

function EditNote(props) {

const [isExpanded, setExpanded] = useState(false);

const [note, setNote] = useState({
  title: "",
  content: ""
});

useEffect(() => {
  setNote({
    title: props.title,
    content: props.content
  })
},[props])

function handleChange(event) {
  const { name, value } = event.target;

  setNote(prevNote => {
    return {
      ...prevNote,
      [name]: value
    };
  });
}

function submitNote(event) {
  props.onAdd(props.id,note);
  setNote({
    title: "",
    content: ""
  });
  event.preventDefault()
}

function expand() {
  setExpanded(true);
}


return (
  <div>
    <form className="edit-note">
      {/* {isExpanded && (
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />
      )} */}
            <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />

      <textarea
        name="content"
        onClick={expand}
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows={3}
        // rows={isExpanded ? 3 : 1}
      />
             <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        {/* <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom> */}
    </form>
  </div>
);
}


export default EditNote;

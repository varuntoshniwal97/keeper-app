import React, {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    console.log(props)
    props.onEdit(props.id);
  }

  function handleOpenMenu(event) {
    props.onMenuClick(props.id, event)
    props.setNoteId(props.id)
  }

  function handleCloseMenu() {
    props.onCloseMenu();
  }

   function handleMenuItem (type) {
    // console.log(noteId)
    props.onCloseMenu();
    props.onMenuItemClick(type);
  }

  return (
    <div className="note">
      <h1>{props.id}</h1>
      <p>{props.content}</p>
      <button onClick={handleOpenMenu}>
        <MoreVertIcon />
      </button>
      <button onClick={handleClick}>
      <DeleteIcon /> 
      </button>
      <button onClick={handleEdit}>
      <EditIcon /> 
      </button>
      <Menu
        id="simple-menu"
        anchorEl={props.menuAnchorEl}
        keepMounted
        open={Boolean(props.menuAnchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem  onClick={() => handleMenuItem("contributor")}>Con</MenuItem>
        <MenuItem onClick={() => handleMenuItem("reader")}>Add Readers</MenuItem>
      </Menu>
    </div>
  );
}

export default Note;

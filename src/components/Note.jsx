import React from "react";
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
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {props.permission === "OWNER" && <button onClick={handleOpenMenu}>
        <MoreVertIcon />
      </button>}
      { props.permission === "OWNER" &&    <button onClick={handleClick}>
      <DeleteIcon /> 
      </button>}
      { (props.permission === "OWNER" || props.permission === "CONTRIBUTOR") &&    <button onClick={handleEdit}>
    <EditIcon /> 
    </button>}
      <span style={{fontSize: "12px", backgroundColor:"#eebd38"}}>{props.permission}</span>
      <Menu
        id="simple-menu"
        anchorEl={props.menuAnchorEl}
        keepMounted
        open={Boolean(props.menuAnchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem  onClick={() => handleMenuItem("contributor")}>Add Contributors</MenuItem>
        <MenuItem onClick={() => handleMenuItem("reader")}>Add Readers</MenuItem>
      </Menu>
    </div>
  );
}

export default Note;

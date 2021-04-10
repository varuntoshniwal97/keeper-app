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
    props.onEdit(props.id);
  }

  function handleOpenMenu(event) {
    props.onMenuClick(props.id, event)
  }

  function handleCloseMenu() {
    props.onCloseMenu();
  }

  function handleMenuItem(type) {
    props.onCloseMenu();
    props.onMenuItemClick(type);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
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
        <MenuItem onClick={() => handleMenuItem("contributor")}>Add Contributors</MenuItem>
        <MenuItem onClick={() => handleMenuItem("reader")}>Add Readers</MenuItem>
      </Menu>
    </div>
  );
}

export default Note;

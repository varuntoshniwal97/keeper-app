import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import EditNote from "./EditNote";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { createNote } from "../actions/createNote"
import { fetchNotes } from "../actions/fetchNotes"
import { fetchUsersForNote } from "../actions/fetchUsersForNote"
import { editNote as editNoteAction } from "../actions/editNote"
import { deleteNote as deleteNoteAction } from "../actions/deleteNote";
import { createPermission } from "../actions/createPermission";
import { deletePermission } from "../actions/deletePermission";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from '@material-ui/core/Checkbox';
// import Button from "@material-ui/core/Button";

function App() {
  const [notes, setNotes] = useState([]);
  const [isEditable, setEditable] = useState(false);
  const [editIndex, setEditIndex] = useState([]);
  const [menuAnchorEl, setMenuAnchor] = useState(null);
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [shareType, setShareType] = useState("");
  const [concernedNoteId, setNoteId] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchNotes();
      setNotes(res.data.data)
      return res
    }
    fetchData().then().catch(error => console.log(error));
  }, [])

  ////add note////
  async function addNote(newNote) {
    const response = await createNote(newNote);
    setNotes((prevNotes) => {
      response.data.data.permission= "OWNER"
      return [...prevNotes, response.data.data];
    });
  }

  function setNoteIdInState(id) {
    setNoteId(id)
  }


  ////delete note////
  async function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem.id !== id;
      })
    })

    await deleteNoteAction(id)
  }

  function handleEditChange(id) {
    setEditable(true)
    setEditIndex(id)
  }

  function editNote(id, editNote) {
    setEditable(false)
    setNotes((prevNotes) => {
      return prevNotes.map(
        (note, index) => {
          if (note.id === id) {
            return editNote
          }
          return note
        }
      );
    });
    editNoteAction(id, editNote)
  }

  function onMenuClick(id, event) {
    setMenuAnchor(event.currentTarget)
    setEditIndex(id);
  }

  function onCloseMenu() {
    setMenuAnchor(null);
  }

  async function handleDialogBox(type) {
    setShareType(type)
    setOpenDialogBox(!openDialogBox);
    const res = await fetchUsersForNote(concernedNoteId)
    setUsers(res.data.data)
  }

  async function selectUsers(id) {
    const userss = users;
    const index = userss.findIndex(user => user.id === id);
    if (index > -1) {
      if (userss[index].permission) {
        userss[index].permission = null;
        await deletePermission(userss[index].permissionId);
      } else {
        userss[index].permission = shareType === "contributor" ? "CONTRIBUTOR" : "READER";
        const params = {
          noteId: concernedNoteId,
          userId: userss[index].id,
          permission: userss[index].permission
        }
        const res = await createPermission(params);
        console.log(res,"RESULT")
        userss[index] = {
          ...userss[index],
          permissionId:res.data.data.id
        }
      }
    }
    console.log("users", userss[index]);
    setUsers([...userss]);
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        if (isEditable && noteItem.id === editIndex  ) {
          return <EditNote id={noteItem.id} title={noteItem.title} content={noteItem.content} permission={noteItem.permission} onAdd={editNote} />
        }
        return (
          <div>
            <Note
              key={index}
              id={noteItem.id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              onEdit={handleEditChange}
              onMenuClick={onMenuClick}
              onCloseMenu={onCloseMenu}
              onMenuItemClick={handleDialogBox}
              menuAnchorEl={menuAnchorEl}
              setNoteId={setNoteIdInState}
              permission={noteItem.permission}
            />
            <Dialog
              open={openDialogBox}
              onClose={handleDialogBox}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{shareType === "contributor" ? "Add Contributors" : "Add Readers"}</DialogTitle>
              <DialogContent>
                {users.map(user => (
                  <div key={user.id} className="users-list">
                    <Checkbox
                      checked={user.permission === null ? false : true}
                      disabled={user.permission === "OWNER" || (user.permission!== null && user.permission.toLowerCase()!= shareType)}
                      onChange={() => selectUsers(user.id)}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <span>{user.fullName}</span>
                    <span style={{}}>{user.permission && (`(${user.permission})`)}</span>
                  </div>
                ))}
              </DialogContent>
            </Dialog>
          </div>
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import EditNote from "./EditNote";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { createNote } from "../actions/createNote"
import { fetchNotes } from "../actions/fetchNotes"
import { fetchUsersForNote } from "../actions/fetchUsersForNote"
import { editNote as editNoteAction } from "../actions/editNote"
import { deleteNote as deleteNoteAction } from "../actions/deleteNote"
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";

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
      console.log(res)
      setNotes(res.data.data)
      return res
    }
    fetchData().then()
  }, [])

  ////add note////
  async function addNote(newNote) {

    const response = await createNote(newNote);
    console.log(response)
    setNotes((prevNotes) => {
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
    console.log("nk", id)
    editNoteAction(id, editNote)
  }

  function onMenuClick(id, event) {
    setMenuAnchor(event.currentTarget)
    setEditIndex(id);
  }

  function onCloseMenu() {
    setMenuAnchor(null);
  }

  async function handleDialogBox(id,type) {
    if (openDialogBox) {
      setShareType("");
    } else {
      setShareType(type)
    }
    setOpenDialogBox(!openDialogBox);
    console.log(id)
    const res = await fetchUsersForNote(concernedNoteId)
    setUsers(res.data.data)
    console.log(res)
  }

  function selectUsers(id) {
    console.log(shareType )
    const userss = users;
    console.log(userss, id);
    const index = userss.findIndex(user => user.id === id);
    console.log(index)
    if (index > -1) {
      userss[index].permission = !userss[index].contributor;
    }
    console.log(userss)
    setUsers(userss)
  }



  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        if (isEditable && noteItem.id === editIndex) {
          return <EditNote id={noteItem.id} title={noteItem.title} content={noteItem.content} onAdd={editNote} />
        }
        return (
          <div>
            <p>{concernedNoteId}</p>
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
                      onChange={() => selectUsers(user.id,shareType)}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <p>{user.fullName}-{user.permission}</p>
                  </div>

                ))}
              </DialogContent>
              <DialogActions>
                <Button onClick={() => { }} color="primary">
                  Add
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

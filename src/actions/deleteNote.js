import  {deleteNote as deleteNoteApi} from "../apis";
export async function deleteNote(noteId) {
    const response = await deleteNoteApi(noteId);
    return response
}   
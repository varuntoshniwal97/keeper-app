import  {editNote as editNoteApi} from "../apis";
export async function editNote(noteId, params) {
    const request = {
        title : params.title ? params.title : undefined,
        content: params.content ? params.content : undefined
    }
    const response = await editNoteApi(noteId, request);
    return response
}   
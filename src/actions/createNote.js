import  {createNote as createNoteApi} from "../apis";
export async function createNote(params) {
    const request = {
        title : params.title,
        content: params.content
    }
    const response = await createNoteApi(request);
    console.log(response)
    return response
}   
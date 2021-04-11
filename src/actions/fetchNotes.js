import  {fetchNotes as fetchNotesApi} from "../apis";
export async function fetchNotes() {
    const response = await fetchNotesApi();
    return response
}   
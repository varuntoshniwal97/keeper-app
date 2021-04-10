import  {fetchNotes as fetchNotesApi} from "../apis";
export async function fetchNotes() {
    console.log("JERE")

    const response = await fetchNotesApi();
    console.log(response)
    return response
}   
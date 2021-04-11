import  {fetchUsersForNote as fetchUsersForNoteApi} from "../apis";
export async function fetchUsersForNote(id) {
    console.log("JERE")

    const response = await fetchUsersForNoteApi(id);
    console.log(response)
    return response
}   
import apiClient from "./apiClient";

export async function createNote(params) {
 try {
  let url = "/createNote";
  const response = await apiClient({
   url: url,
   method: "POST",
   data: params
  });

  return response;
 } catch (error) {
  throw error;
 }
}

export async function editNote(noteId, params) {
    try {
     let url = "/updateNote/"+noteId;
     const response = await apiClient({
      url: url,
      method: "PATCH",
      data: params
     });
   
     return response;
    } catch (error) {
     throw error;
    }
}

export async function fetchNotes() {
    try {
     let url = "/fetchNotes/";
     const response = await apiClient({
      url: url,
      method: "GET",
     });
   
     return response;
    } catch (error) {
     throw error;
    }
}

export async function deleteNote(id) {
    try {
     let url = "/deleteNote/"+ id;
     const response = await apiClient({
      url: url,
      method: "DELETE",
     });
   
     return response;
    } catch (error) {
     throw error;
    }
}


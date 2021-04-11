import  {createPermission as createPermissionApi} from "../apis";
export async function createPermission(params) {
    const request = {
        userId : params.userId,
        permission: params.permission,
        noteId: params.noteId
    }
    const response = await createPermissionApi(request);
    return response
}   
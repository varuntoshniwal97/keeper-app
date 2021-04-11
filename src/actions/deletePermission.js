import  {deletePermission as deletePermissionApi} from "../apis";
export async function deletePermission(permissionId) {
    const response = await deletePermissionApi(permissionId);
    return response
}   
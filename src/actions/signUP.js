import { signUp as signUpApi } from "../apis";
export async function signUp(params) {
 try {
  const request = {
   email: params.email,
   password: params.password,
   name: params.name
  }
  const response = await signUpApi(request);
  localStorage.setItem("token", response.data.token);
  return response;
 } catch (error) {
  throw error;
 }
}
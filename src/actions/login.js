import { login as loginAPI } from "../apis";
export async function login(params) {
 try {
  const request = {
   email: params.email,
   password: params.password
  }
  const response = await loginAPI(request);
  localStorage.setItem("token", response.data.token);
  return response;
 } catch (error) {
  console.log(error);
  throw error;
 }
}
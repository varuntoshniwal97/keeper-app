import apiClient from "./apiClient";

export async function createClass(sellerId, params) {
 try {
  let url = "/createClass/:sellerId";
  url = url.replace(":sellerId", sellerId);
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

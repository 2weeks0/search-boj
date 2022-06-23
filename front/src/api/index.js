import axios from "axios";

export async function searchUser(id) {
  const options = {
    method: "GET",
    url: "https://solved.ac/api/v3/user/show",
    params: { handle: id },
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

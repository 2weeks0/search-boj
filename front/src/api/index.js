import axios from "axios";

const baseURL = "https://solved.ac/api/v3";

export async function searchUser(id) {
  const options = {
    method: "GET",
    url: `${baseURL}/user/show`,
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

export async function search({ team, page }) {
  let query = "";
  team.forEach((it) => query += `!s@${it.handle}`);

  const options = {
    method: "GET",
    url: `${baseURL}/search/problem`,
    params: { query, page },
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

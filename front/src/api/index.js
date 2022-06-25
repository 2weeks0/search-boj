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

export async function search({ team, tierFilter, page, sort }) {
  const options = {
    method: "GET",
    url: `${baseURL}/search/problem`,
    params: { query: getQuery(team, tierFilter), page, sort: sort.key, direction: sort.direction },
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

function getQuery(team, tierFilter) {
  let query = "";
  team.forEach((it) => (query += `!s@${it.handle}`));
  query += " ";

  if (tierFilter.length !== 0) {
    query += "(";
    tierFilter.forEach((it, idx) => {
      query += `*${it}`;
      if (idx !== tierFilter.length - 1) {
        query += "|";
      }
    });
    query += ")";
  }
  return query;
}

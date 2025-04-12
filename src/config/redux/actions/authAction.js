import fetch, { BASE_URL } from "../../fetch";

export const login = async (payload) => {
  const url = BASE_URL + "/users/login";
  try {
    const { data } = await fetch.post(url, payload);
    if (data.statusCode === 201) {
      alert(data.message);
      localStorage.setItem("email", data.data.email);
      window.location.reload();
    } else {
      alert(data.message);
    }
    return data;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

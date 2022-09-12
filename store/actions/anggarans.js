import axios from "../axios";

export const registerUser = (payload) => async (dispatch) => {
  await axios.post("/auth/register", payload);

  await loginUser(payload)(dispatch);
};

export const inputData = (payload) => async (dispatch) => {
  await axios.post("/auth/data", payload);

  await loginUser(payload)(dispatch);
};

import { CURRENT_USER_ACTION } from "../reducers/currentUser";
import * as cookieUtils from "../../utils/cookieUtils";
import { RESOURCE_NAME } from "../../utils/constant";
import axios from "../axios";
import { getDataById } from "./resources";

export const loginUser = (payload) => async (dispatch) => {
  const { data: loginRes } = await axios.post("/auth/login", payload);

  cookieUtils.setToken(loginRes.token);
  cookieUtils.setUserId(loginRes.id);

  const data = await getDataById(RESOURCE_NAME.USERS, loginRes.id)();

  dispatch({ type: CURRENT_USER_ACTION.SET_CURRENT_USER, data });

  return data;
};

export const registerUser = (payload) => async (dispatch) => {
  await axios.post("/auth/register", payload);

  await loginUser(payload)(dispatch);
};

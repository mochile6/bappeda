import { CURRENT_USER_ACTION } from "../reducers/currentUser";
import * as cookieUtils from "../../utils/cookieUtils";
import { RESOURCE_NAME } from "../../utils/constant";
import axios from "../axios";
import { getDataById } from "./resources";

export const loginUser = (payload) => async (dispatch) => {
  const { data: loginRes } = await axios.post("/auth/login", payload);

  console.log(loginRes.token);

  cookieUtils.setToken(loginRes.token);
  cookieUtils.setUserId(loginRes.id);

  const data = await getDataById(RESOURCE_NAME.USERS, loginRes.id)();

  dispatch({ type: CURRENT_USER_ACTION.SET_CURRENT_USER, data });

  return data;
};

export const registerUser = (payload) => async (dispatch) => {
  await axios.post("/auth/register", payload);

  return dispatch(loginUser(payload));
};

export const logoutUser = () => async (dispatch) => {
  cookieUtils.removeToken();
  cookieUtils.removeUserId();

  dispatch({ type: CURRENT_USER_ACTION.CLEAR_CURRENT_USER });
};

export const getCurrentUser = () => async (dispatch) => {
  const userId = cookieUtils.getUserId();

  if (!userId) {
    return;
  }

  const data = await getDataById(RESOURCE_NAME.USERS, userId)();

  dispatch({ type: CURRENT_USER_ACTION.SET_CURRENT_USER, data });

  return data;
};

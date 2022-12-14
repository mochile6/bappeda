import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export const setUserId = (userId) => Cookies.set("userId", String(userId));

export const getUserId = () => {
  const userId = Cookies.get("userId");

  if (!userId) return;

  return +userId;
};

export const removeUserId = () => Cookies.remove("userId");

export const setToken = (token) => Cookies.set("token", token);

export const getToken = () => Cookies.get("token");

export const isAuthenticated = () => {
  const token = getToken();

  if (!token) return false;

  const { exp } = jwtDecode(token);

  if (!exp) return false;

  return exp * 1000 > Date.now();
};

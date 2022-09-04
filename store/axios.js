import axios from "axios";
import * as cookieUtils from "../utils/cookieUtils";
import {
  overwriteResource,
  setResource,
  updateResource,
} from "./actions/resources";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const applyInterceptors = (dispatch) => {
  instance.interceptors.request.use(
    (config) => {
      const token = cookieUtils.getToken();
      config.headers.Authorization = token ? `Bearer ${token}` : "";

      config.resourceName = config.headers.resourceName;
      config.headers.overwrite = config.headers.overwrite;

      return config;
    },
    (err) => Promise.reject(err)
  );

  instance.interceptors.response.use((res) => {
    const { config, data } = res;

    if (!config.resourceName) return res;

    if (config.overwrite) {
      dispatch(overwriteResource(config.resourceName, data));
    } else if (config.method === "patch") {
      dispatch(updateResource(config.resourceName, { id: data.id, data }));
    } else {
      dispatch(setResource(config.resourceName, data));
    }

    return res;
  });
};

export default instance;

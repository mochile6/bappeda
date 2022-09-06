import axios from "../axios";

export const setResource = (resourceName, data) => ({
  type: `resources.${resourceName}.set`,
  data,
});

export const updateResource = (resourceName, data) => ({
  type: `resources.${resourceName}.update`,
  data,
});

export const overwriteResource = (resourceName, data) => ({
  type: `resources.${resourceName}.overwrite`,
  data,
});

export const deleteResource = (resourceName, data) => ({
  type: `resources.${resourceName}.delete`,
  data,
});

export const getAllData =
  (resourceName, query = "", overwrite = true) =>
  async () => {
    const { data } = await axios.get(`/${resourceName}?${query}`, {
      headers: {
        resourceName,
        overwrite,
      },
    });

    return data;
  };

export const getDataById =
  (resourceName, id, query = "", overwrite = false) =>
  async () => {
    const { data } = await axios.get(`/${resourceName}/${id}?${query}`, {
      headers: {
        resourceName,
        overwrite,
      },
    });

    return data;
  };

export const addData = (resourceName, payload) => async (dispatch) => {
  const { data } = await axios.post(`/${resourceName}`, payload, {
    headers: {
      resourceName,
    },
  });

  dispatch(
    updateResource(resourceName, {
      id: data.id,
      data,
    })
  );

  return data;
};

export const updateData =
  (resourceName) =>
  (id, update, query = "") =>
  async () => {
    const { data } = await axios.patch(
      `/${resourceName}/${id}?${query}`,
      update,
      {
        headers: {
          resourceName,
        },
      }
    );

    return data;
  };

export const deleteData = (resourceName, id) => async (dispatch) => {
  await axios.delete(`/${resourceName}/${id}`);

  dispatch(deleteResource(resourceName, id));
};

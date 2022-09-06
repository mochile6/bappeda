export const getResources = (resourceName) => (state) =>
  state.resources[resourceName];

export const getResourceById = (resourceName, id) => (state) =>
  getResources(resourceName)(state).rows[id];

export const getResourceTotal = (resourceName) => (state) =>
  getResources(resourceName)(state).count ?? 0;

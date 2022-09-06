export const CURRENT_USER_ACTION = {
  SET_CURRENT_USER: "currentUser.set",
  CLEAR_CURRENT_USER: "currentUser.clear",
};

const defaultState = {};

const currentUser = (state = defaultState, action) => {
  switch (action.type) {
    case CURRENT_USER_ACTION.SET_CURRENT_USER:
      return {
        ...state,
        ...action.data,
      };

    case CURRENT_USER_ACTION.CLEAR_CURRENT_USER:
      return defaultState;

    default:
      return state;
  }
};

export default currentUser;

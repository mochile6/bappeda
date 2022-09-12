import _ from "lodash";
import { combineReducers } from "redux";
import { RESOURCE_NAME } from "../../utils/constant";

const defaultState = {
  rows: [],
  count: 0,
};

const reducer =
  (resourceName) =>
  (state = defaultState, action) => {
    let temp = defaultState;

    switch (action.type) {
      case `resources.${resourceName}.set`:
        const data = _.isArray(action.data.rows)
          ? action.data.rows
          : [action.data.rows];

        return {
          ...state,
          rows: {
            ...state.rows,
            ..._.keyBy(data, "id"),
          },
          count: action.data.count ?? 0,
        };

      case `resources.${resourceName}.update`:
        return {
          ...state,
          rows: {
            ...state.rows,
            [action.data.id]: {
              ...state.rows[action.data.id],
              ...action.data.data,
            },
          },
        };

      case `resources.${resourceName}.delete`:
        temp = _.cloneDeep(state);

        delete temp.rows[action.data];
        return temp;

      case `resources.${resourceName}.overwrite`:
        const data1 = _.isArray(action.data.rows)
          ? action.data.rows
          : [action.data.rows];

        return {
          rows: _.keyBy(data1, "id"),
          count: action.data.count ?? 0,
        };
      default:
        return state;
    }
  };

const allReducer = _.reduce(
  RESOURCE_NAME,
  (acc, curr) => ({
    ...acc,
    [curr]: reducer(curr),
  }),
  {}
);

export default combineReducers(allReducer);

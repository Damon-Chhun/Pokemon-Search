import { GET_OFFSET } from "../action";

const initialState = {
  value: 0
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_OFFSET:
      return {
        ...state,
        value: data
      };

    default:
      return state;
  }
}

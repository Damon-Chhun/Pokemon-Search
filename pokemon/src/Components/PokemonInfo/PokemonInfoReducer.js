import { GET_WEIGHT } from "../action";

const initialState = {
  weight: []
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_WEIGHT:
      return {
        weight: [...state.weight, data]
      };
    default:
      return state;
  }
}

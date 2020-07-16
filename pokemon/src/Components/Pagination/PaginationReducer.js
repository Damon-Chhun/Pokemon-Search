import { GET_OFFSET } from "../action";

const initialState = {
  value: 0,
  fetchingData: false,
  receivedData: false
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_OFFSET:
      return {
        ...state,
        value: data
      };

    case "fetchingData":
      return {
        ...state,
        fetchingData: true,
        receivedData: false
      };

    case "ReceivedData":
      return {
        ...state,
        fetchingData: false,
        receivedData: true
      };

    default:
      return state;
  }
}

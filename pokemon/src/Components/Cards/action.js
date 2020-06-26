export const GET_OFFSET = "GET_OFFSET";

export function nextPage(data) {
  return {
    type: GET_OFFSET,
    data
  };
}

export function prevPage(data) {
  return {
    type: GET_OFFSET,
    data
  };
}

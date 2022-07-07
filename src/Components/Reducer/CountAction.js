const Increment_count = { type: "Increment" };
const Decrement_count = { type: "Decrement" };

export const Add = (dispatch, text) => {
    console.log('text',text)
  dispatch({ ...Increment_count, payload: text });
};

export const Sub = (dispatch, text) => {
  dispatch({ ...Decrement_count, payload: text });
};

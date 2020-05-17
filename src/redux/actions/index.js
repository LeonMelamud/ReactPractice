//first add action - return object
//type - action name
export const increment = nr => {
  return {
    type: "INCREMENT",
    payload : nr
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const reset = () => {
  return {
    type: "RESET",
  };
};

export const logIn = () => {
  return {
    type: "LOG_IN",
    description: "you log in ",
    logInCLICK: true
  };
};
export const logOut = () => {
  return {
    type: "LOG_OUT",
    description: "you log out ",
  };
};

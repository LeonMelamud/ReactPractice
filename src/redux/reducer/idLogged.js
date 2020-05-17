//add REDUCER- logic for the action
const idLogged = (state = false, action) => {
let logInCLICK = action.logInCLICK;
  switch (action.type) {
    case "LOG_IN":
        if (state === false && logInCLICK) {
            console.log('clicked on Log In');
          logInCLICK = false;
          return !state;
        };
        return state;
         break; 
    case "LOG_OUT":
        if (state === true && !logInCLICK ) { 
            console.log("clicked on Log OUT");
            logInCLICK=true; return !state
        
        } ;
        return state; 
         break;
    default:
            console.log('defalt');
            return state;
        break;
      

  }
};
export default idLogged;


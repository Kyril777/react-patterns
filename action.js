export const ADD_CLIENT = "ADD_CLIENT";
export const UPDATE_CLIENT = "UPDATE_CLIENT";
 
// Create action.
 
export const addClient = (payload) => {
   return ({
       type: ADD_CLIENT,
       payload
   })
}
 
export const updateClient = (payload) => {
   return ({
       type: UPDATE_CLIENT, payload
   })
}

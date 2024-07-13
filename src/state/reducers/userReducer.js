const userReducer = (user="", action) => {
   // console.log(action)
    switch(action.type){
        case "user":
            return action.payload;
        default:
            return user;
    }
}
export default userReducer
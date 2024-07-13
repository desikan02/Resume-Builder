const addproject = (news=[], action) => {
 
    switch(action.type){
        case "add":
            return [ ...news, action.payload];
        case "remove":
            let arr = [...news]
            arr.splice(action.payload, 1);
            return arr;
        default:
            return news;
    }
}
export default addproject